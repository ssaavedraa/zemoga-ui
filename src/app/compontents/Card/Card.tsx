import Image from 'next/image'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { cardStyles } from './styles'
import { ViewOptions } from '@/app/types/types'

interface Votes {
  positive: number
  negative: number
}

export interface CardProps {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: Votes
  key: string
  view: ViewOptions
}

export default function Card ({ name, description, category, picture, lastUpdated, votes, view }: CardProps) {
  const styles = cardStyles[view]

  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <FaThumbsDown className='m-auto'/>
      </div>
      <Image src={`/images${picture}`} alt={name} width={300} height={300} className={styles.image}/>
      <div className={styles.dataContainer}>
        <span className={styles.name}>{name}</span>
        <small className={styles.description}>{description}</small>
        <strong className={styles.lastUpdate}>1 month ago in <span className='capitalize'>{category}</span></strong>
        <div className={styles.buttonContainer}>
          <button className='bg-teal-500 w-8 h-8 mx-[6px]'>
            <FaThumbsUp className='m-auto'/>
          </button>
          <button className='bg-yellow-500 w-8 h-8 mx-[6px]'>
            <FaThumbsDown className='m-auto'/>
          </button>
          <button className='text-center px-3 py-1 text-lg bg-black bg-opacity-60 border-white border-[1px] w-[107px] h-[38px] ml-[6px] from-[#000000ab]'>
            Vote Now
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 w-full z-10 h-9 flex flex-row text-right'>
        <div style={{ width: `25.5%` }} className='bg-teal-500 bg-opacity-60 h-full flex flex-row items-center justify-end'>
          <FaThumbsUp />
          <span>25.5%</span>
        </div>
        <div style={{ width: `74.5%` }} className='bg-yellow-500 bg-opacity-60 h-full flex flex-row items-center justify-end'>
          <span>74.5%</span>
          <FaThumbsDown />
        </div>
      </div>
    </div>
  )
}