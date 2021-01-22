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
import { GetStudentByMission } from "./endpoints/GetStudentByMission";
import { GetTeacherByMission } from "./endpoints/GetTeacherByMission";
import { DeleteStudent } from "./endpoints/DeleteStudent";
import { RemoveStudentFromMission } from "./endpoints/RemoveStudentFromMission";
import { RemoveTeacherFromMission } from "./endpoints/RemoveTeacherFromMission";
import { GetStudentsHobby } from "./endpoints/GetStudentsHobby";

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
app.get('/student/mission/:id', GetStudentByMission)
app.get('/teacher/mission/:id', GetTeacherByMission)
app.delete('/student/:id', DeleteStudent)
app.put('/student/:id', RemoveStudentFromMission)
app.put('/teacher/:id', RemoveTeacherFromMission)
app.get('/student/hobby/:id', GetStudentsHobby)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});