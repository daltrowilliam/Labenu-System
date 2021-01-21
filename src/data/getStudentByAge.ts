import { connection } from '../index'

export default async function getStudentByAge(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT name, FLOOR(DATEDIFF(CURDATE(), birth_date)/365) AS age
    FROM Student
    WHERE id = "${id}";
 `)
    console.log(result[0])
    return result[0]
 } 