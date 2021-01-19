import { connection } from '../index'

export default async function createStudent(
    name: string,
    email: string,
    birth_date: string,
    mission_id: number
):Promise<any> {
    const result = await connection
    .insert({
        id: Math.round(Date.now()/10000),
        name: name,
        email: email,
        birth_date: birth_date,
        mission_id: mission_id
      })
      .into("Student");
    
    return result[0]
 } 