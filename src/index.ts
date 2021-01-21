import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { PostStudent } from "./endpoints/PostStudent";
import { PostTeacher } from "./endpoints/PostTeacher";
import { PostMission } from "./endpoints/PostMission";
import { UpdateStudent } from "./endpoints/UpdateStudent";
import { UpdateTeacher } from "./endpoints/UpdateTeacher";
import { GetAgeStudent } from "./endpoints/GetAgeStudent";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.post('/student', PostStudent)
app.post('/teacher', PostTeacher)
app.post('/mission', PostMission)
app.put('/student', UpdateStudent)
app.put('/teacher', UpdateTeacher)
app.get('/student/:id', GetAgeStudent)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});