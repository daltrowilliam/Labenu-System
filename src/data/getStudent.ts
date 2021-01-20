import { connection } from '../index'

export default async function getStudent(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM Student
    WHERE id = ${id};
    `)
    return result[0]
 } 