import { connection } from '../index'

export default async function getTeacher(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM Teacher
    WHERE id = ${id};
    `)
    return result[0]
 } 