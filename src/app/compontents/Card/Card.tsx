import Image from 'next/image'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { cardStyles } from './styles'
import { ViewOptions, Votes } from '@/app/types/types'
import VotingBox from '../VotingBox/VotingBox'
import VotesGauge from '../VotesGauge/VotesGauge'
import { useVote } from '@/app/hooks/useVote'
import { useEffect, useState } from 'react'
import { fetchPeopleDataById } from '@/app/services/peopleService'

export interface CardProps {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: Votes
  key: string
  view: ViewOptions
  id: number
}

export default function Card ({ name, description, category, picture, lastUpdated, votes, view, id }: CardProps) {
  const { handleVoteSelection, isButtonSelected, sendButtonMessage, sendVote, vote } = useVote(id)
  const [votesData, setVotesData] = useState<Votes>({ positive: votes.positive, negative: votes.negative })
  const [timeElapsedSinceLastVote, setTimeElapsedSinceLastVote] = useState(lastUpdated)
  const [showGreetings, setShowGreetings] = useState(false)

  const styles = cardStyles[view]

  const fetchPersonById = async () => {
    const updatedData = await fetchPeopleDataById(id)

    if (updatedData.votes.positive !== votes.positive && updatedData.votes.negative !== votes.negative) {
      setShowGreetings(true)
      setVotesData(updatedData.votes)
      setTimeElapsedSinceLastVote(updatedData.lastUpdate)
    }
  }

  useEffect(() => {
    if (sendButtonMessage === 'Vote Again') {
      fetchPersonById()
    }
  }, [sendButtonMessage])

  return (
    <div className={styles.card}>
      <div className={`${styles.cardIcon} ${votesData.negative > votesData.positive ? 'bg-yellow-500' : 'bg-teal-500'}`}>
        {
          votesData.negative > votesData.positive
          ? <FaThumbsDown className='m-auto'/>
          : <FaThumbsUp className='m-auto' />
        }
      </div>
      <Image src={`/images${picture}`} alt={name} width={300} height={300} className={styles.image}/>
      <div className={styles.dataContainer}>
        <span className={styles.name}>{name}</span>
        <small className={styles.description}>{description}</small>
        {
          showGreetings
          ? <strong className={styles.lastUpdate}>Thank you for your vote!</strong>
          : <strong className={styles.lastUpdate}>{timeElapsedSinceLastVote} in <span className='capitalize'>{category}</span></strong>
        }
        <VotingBox
          styles={styles.buttonContainer}
          handleVoteSelection={handleVoteSelection}
          isButtonSelected={isButtonSelected}
          sendButtonMessage={sendButtonMessage}
          sendVote={sendVote}
          vote={vote}
        />
      </div>
      <VotesGauge positive={votesData.positive} negative={votesData.negative} />
    </div>
  )
}