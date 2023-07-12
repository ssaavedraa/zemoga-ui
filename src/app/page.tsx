import CardContainer from './compontents/CardContainer/CardContainer'
import { fetchPeopleData } from './services/peopleService'

export default async function Home () {
  const data = await fetchPeopleData()
  return (
    <CardContainer data={data} />
  )
}
