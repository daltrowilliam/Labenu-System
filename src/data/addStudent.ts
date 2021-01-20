import { connection } from '../index'

export default async function addStudent(
    id: number,
    mission_id: number
):Promise<void> {
    await connection.raw(`
      UPDATE Student
      SET mission_id = ${mission_id}
      WHERE id = ${id};
    `)
 } 