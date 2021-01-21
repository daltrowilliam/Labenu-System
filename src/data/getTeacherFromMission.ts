import { connection } from '../index'

export default async function getTeacherFromMission(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT t.name as name, t.email, s.name as specialty FROM Teacher t
    INNER JOIN Teacher_specialty ts ON t.id = ts.teacher_id
    LEFT JOIN Specialty s ON s.id = ts.specialty_id
    WHERE mission_id = ${id};
    `)
    return result[0]
 } 

