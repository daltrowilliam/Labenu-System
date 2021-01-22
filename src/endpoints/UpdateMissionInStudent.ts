import { Request, Response } from "express";
import addStudent from '../data/addStudent'
import getMission from "../data/getMission";
import getStudent from "../data/getStudent";

export const UpdateStudent = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      if(!req.body.id || !req.body.mission_id){
         errorCode = 422;
         throw new Error("Preencha todos os campos e tente novamente.")
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

      res.status(200).send("Estudante cadastrado na turma com sucesso");
   } catch (err) {
     res.status(400).send({
       message: err.message
     })
   }
} 