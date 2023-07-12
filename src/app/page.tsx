import CardContainer from './compontents/CardContainer/CardContainer'
import { PeopleData } from './types/types'

export default async function Home () {
  const data = await fetchPeopleData()
  return (
    <CardContainer data={data} />
  )
}

const fetchPeopleData = async (): Promise<PeopleData[]> => {
  try {
    const response = await fetch(`http://localhost:3001/people`, { cache: 'no-store' })

    return response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}
