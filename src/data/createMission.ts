import { connection } from '../index'

export default async function createMission(
    name: string,
    start_date: string,
    end_date: string,
    module: number
):Promise<any> {
    const result = await connection
    .insert({
        id: Math.round(Date.now()/10000),
        name: name,
        start_date: start_date,
        end_date: end_date,
        module: module
      })
      .into("Mission");
    
    return result[0]
 } 