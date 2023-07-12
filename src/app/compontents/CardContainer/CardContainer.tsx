'use client'

import { cardContainerStyles } from '@/app/styles';
import { PeopleData } from '@/app/types/types';
import ViewSelector from '../ViewSelector/ViewSelector';
import Card from '../Card/Card';
import useView from '@/app/hooks/useView';

interface CardContainerProps {
  data: PeopleData[]
}

export default function CardContainer ({data}: CardContainerProps) {
  const { handleOptionChange, selectedOption, showOptions, toggleShowOptions} = useView()

  const styles = cardContainerStyles[selectedOption]

  return (
    <>
      <div className='flex flex-row flex-nowrap items-center justify-between'>
        <p className='text-black text-[24px] mt-3 mb-[24px]'>Previous Rulings</p>
        <ViewSelector
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          showOptions={showOptions}
          toggleShowOptions={toggleShowOptions}
        />
      </div>

      <main className={styles.cardContainer}>
        {data.map(({ name, description, category, picture, lastUpdated, votes, id}) => (
          <Card
            key={name}
            name={name}
            description={description}
            category={category}
            picture={picture}
            lastUpdated={lastUpdated}
            votes={votes}
            view={selectedOption}
            id={id}
          />
          ))}
      </main>
    </>
  )
}