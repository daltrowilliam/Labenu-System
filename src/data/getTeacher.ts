import { connection } from '../index'

export default async function getTeacher(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM Teacher
    WHERE id = ${id};
    `)
    console.log(result[0])
    return result[0]
 } 