import { PeopleData } from '../types/types'

export const fetchPeopleData = async (): Promise<PeopleData[]> => {
  try {
    const response = await fetch(`https://zemoga-api.santiagosaavedra.com.co/people`, { cache: 'no-store' })

    return response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchPeopleDataById = async (id: number): Promise<any> => {
  try {
    const response = await fetchPeopleData()

    const updatedPersonData = response.filter(({ id: personId }) => personId === id)[0]

    return {
      votes: updatedPersonData.votes,
      lastUpdate: updatedPersonData.lastUpdated
    }
  } catch (error) {
    console.error(error)
  }
}