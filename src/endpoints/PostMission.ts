import { Request, Response } from "express";
import createMission from '../data/createMission'

export const PostMission = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      if(!req.body.name || !req.body.start_date || !req.body.end_date){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }

      if (req.body.module>7 || req.body.module<1) {
         errorCode = 422;
         throw new Error("O valor do módulo deve ser entre 1 e 7.")
      }

      await createMission(
         req.body.name,
         req.body.start_date,
         req.body.end_date,
         req.body.module
      )
      res.status(200).send("Turma criada com sucesso");
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 