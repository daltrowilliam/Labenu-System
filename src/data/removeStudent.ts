import { connection } from '../index'

export default async function removeStudent(
    id: number
):Promise<void> {
    await connection.raw(`
      DELETE FROM Student_hobby
      WHERE student_id = ${id};
    `)
    await connection.raw(`
      DELETE FROM Student
      WHERE id = ${id};
  `)

 } 