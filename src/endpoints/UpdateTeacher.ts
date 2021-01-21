import { Request, Response } from "express";
import addTeacher from '../data/addTeacher'
import getMission from "../data/getMission";
import getTeacher from "../data/getStudent";

export const UpdateTeacher = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      if(!req.body.id || !req.body.mission_id){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }

      const teacher = await getTeacher(
      Number(req.body.id)
      )
      if (teacher.length===0) {
         errorCode = 422;
         throw new Error("Professor inexistente.")
      }

      const mission = await getMission(
         Number(req.body.mission_id)
         )
         if (mission.length===0) {
            errorCode = 422;
            throw new Error("Turma inexistente.")
      }

      await addTeacher(
         Number(req.body.id),
         Number(req.body.mission_id)
      )

      res.status(200).send("Professor cadastrado na turma com sucesso");
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 