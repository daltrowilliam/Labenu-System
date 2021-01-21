import { connection } from '../index'

export default async function getStudentFromMission(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT name, email FROM Student
    WHERE mission_id = ${id};
    `)
    return result[0]
 } 