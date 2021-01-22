import { Request, Response } from "express";
import addStudent from '../data/addStudent'
import getMission from "../data/getMission";
import getStudent from "../data/getStudent";

export const UpdateMissionInStudent = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      if(!req.body.id || !req.body.mission_id){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
      }

      if(isNaN(Number(req.body.mission_id)) || isNaN(Number(req.body.id))) {
         errorCode = 422;
         throw new Error("Id inválido")
      }

      const student = await getStudent(
      Number(req.body.id)
      )
      if (student.length===0) {
         errorCode = 422;
         throw new Error("Estudante inexistente.")
      }

      const mission = await getMission(
         Number(req.body.mission_id)
         )
         if (mission.length===0) {
            errorCode = 422;
            throw new Error("Turma inexistente.")
      }

      await addStudent(
         Number(req.body.id),
         Number(req.body.mission_id)
      )

      res.status(200).send("Turma alterada com sucesso");
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 