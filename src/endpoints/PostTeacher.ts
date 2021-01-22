import { Request, Response } from "express";
import createTeacher from '../data/createTeacher'

export const PostTeacher = async(req: Request,res: Response): Promise<any> =>{
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
      await createTeacher(
         req.body.name,
         req.body.email,
         req.body.birth_date,
         req.body.mission_id
      )
      res.status(200).send("Professor(a) criado com sucesso");
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 