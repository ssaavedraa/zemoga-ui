import mockData from './data.json'
import Card from './compontents/Card/Card'

export default function Home() {
  return (
    <>
      <p className='text-black text-xl mt-3 mb-[24px]'>Previous Rulings</p>
      <main className='flex h-full overflow-x-scroll'>
        {mockData.data.map(({ name, description, category, picture, lastUpdated, votes}) => (
          <Card
          key={name}
          name={name}
          description={description}
          category={category}
          picture={picture}
          lastUpdated={lastUpdated}
          votes={votes}
          />
          ))}
      </main>
    </>
  )
}
