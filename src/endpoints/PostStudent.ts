import { Request, Response } from "express";
import createStudent from '../data/createStudent'

export const PostStudent = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      if(isNaN(Number(req.body.mission_id)) && req.body.mission_id !== undefined) {
         errorCode = 422;
         throw new Error("Id da Turma inválido")
      }

      if(!req.body.name || !req.body.email || !req.body.birth_date){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }
      await createStudent(
         req.body.name,
         req.body.email,
         req.body.birth_date,
         req.body.mission_id
      )
      res.status(200).send("Estudante criado com sucesso");
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 