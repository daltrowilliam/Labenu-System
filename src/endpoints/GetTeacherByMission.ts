import { Request, Response } from "express";
import getMission from "../data/getMission";
import getTeacherFromMission from "../data/getTeacherFromMission";

export const GetTeacherByMission = async(req: Request,res: Response): Promise<any> =>{
   let errorCode: number = 400;
   try {
      const result = await getTeacherFromMission(
      Number(req.params.id)
      )

      const mission = await getMission(
         Number(req.params.id)
         )
      if (mission.length===0) {
         errorCode = 422;
         throw new Error("Turma inexistente.")
      }

      if (result.length===0) {
         errorCode = 422;
         throw new Error("Nenhum professor nesta turma.")
      }

      // const specialtys = result.map((name: any) => {
      //       name.specialty
      //    return name.specialty
      // })

      // const finalResult = {
      //    "name": result[0].name,
      //    "email": result[0].email,
      //    "specialtys": specialtys
      // }

      // const teachers = result.reduce((obj: { [x: string]: any[]; }, {name, email, specialty}: any) => {
      //    if (!obj[name]) obj[name] = [];
      //    obj[name].push(specialty)
      //    return obj
      //  }, {});

      let teachers = [];

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
      }
     
      res.status(200).send(teachers);
   } catch (err) {
     res.status(errorCode).send({
       message: err.message
     })
   }
} 