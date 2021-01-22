import { connection } from '../index'

export default async function getHobby(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM Hobby
    WHERE id = ${id};
    `)
    return result[0]
 } 