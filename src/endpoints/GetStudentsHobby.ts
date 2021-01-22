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

/*       let teachers = [];

      for (let i = 0; i < result.length; i++) {
         let sameName = false;
         for (let j = 0; j < i; j++) {
            if (teachers[j] && result[i].name === teachers[j].name) {
                  teachers[j].specialtys.push(
                     result[i].specialty
                  )
                  sameName = true;
                  break;
            }
         }
         if (!sameName) {
            teachers.push({
                  name: result[i].name,
                  email: result[i].email,
                  specialtys: [
                     result[i].specialty
                  ]
            })
         }
      } */
     
      res.status(200).send(result);
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 