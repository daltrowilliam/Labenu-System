import { connection } from '../index'

export default async function addTeacher(
    id: number,
    mission_id: number
):Promise<void> {
    await connection.raw(`
      UPDATE Teacher
      SET mission_id = ${mission_id}
      WHERE id = ${id};
    `)
 } 