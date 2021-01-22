import { Request, Response } from "express";
import getHobby from "../data/getHobby";
import getHobbyByStudent from "../data/getHobbyByStudent";

export const GetStudentsHobby = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      if(isNaN(Number(req.params.id))) {
         errorCode = 422;
         throw new Error("Id inválido")
      }

      const hobby = await getHobby(
         Number(req.params.id)
         )
      if (hobby.length===0) {
         errorCode = 422;
         throw new Error("Hobby inexistente!")
      }
      
      const result = await getHobbyByStudent(
      Number(req.params.id)
      )

      if (result.length===0) {
         errorCode = 422;
         throw new Error("Nenhum aluno possui esse hobby!")
      }

    
      res.status(200).send(result);
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 