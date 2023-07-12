import Image from 'next/image'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { cardStyles } from './styles'
import { ViewOptions, Votes } from '@/app/types/types'
import VotingBox from '../VotingBox/VotingBox'
import VotesGauge from '../VotesGauge/VotesGauge'

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
        <strong className={styles.lastUpdate}>{lastUpdated} in <span className='capitalize'>{category}</span></strong>
        <VotingBox styles={styles.buttonContainer} />
      </div>
      <VotesGauge positive={votes.positive} negative={votes.negative} />
    </div>
  )
}