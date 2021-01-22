import { connection } from '../index'

export default async function getHobbyByStudent(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT s.name as name, h.name as hobby FROM Student s
    INNER JOIN Student_hobby sh ON s.id = sh.student_id
    LEFT JOIN Hobby h ON h.id = sh.hobby_id
    WHERE sh.hobby_id = ${id};
    `)
    return result[0]
 } 
