import { connection } from '../index'

export default async function getMission(
    id: number
):Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM Mission
    WHERE id = ${id};
    `)
    return result[0]
 } 