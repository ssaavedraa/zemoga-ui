'use client'

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

interface VotingBoxProps {
  styles: string
  sendButtonMessage: string | undefined
  vote: 'positive' | 'negative' | undefined
  isButtonSelected: (value: 'positive' | 'negative') => boolean
  handleVoteSelection: (value: 'positive' | 'negative') => void
  sendVote: () => void
}

export default function VotingBox ({ styles, isButtonSelected, handleVoteSelection, sendButtonMessage, sendVote, vote }: VotingBoxProps) {
  return (
    <div className={styles}>
      <button className={`bg-teal-500 w-8 h-8 mx-[6px] disabled:opacity-60 ${isButtonSelected('positive') ? 'border-2 border-white' : ''}`} value='positive' disabled={sendButtonMessage === 'Vote Again'} onClick={() => handleVoteSelection('positive')}>
        <FaThumbsUp className='m-auto'/>
      </button>
      <button className={`bg-yellow-500 w-8 h-8 mx-[6px] disabled:opacity-60 ${isButtonSelected('negative') ? 'border-2 border-white' : ''}`} value='negative' disabled={sendButtonMessage === 'Vote Again'} onClick={() => handleVoteSelection('negative')}>
        <FaThumbsDown className='m-auto'/>
      </button>
      <button className='text-center px-3 py-1 text-lg bg-black bg-opacity-60 border-white border-[1px] min-w-[107px] h-[38px] ml-[6px] from-[#000000ab] disabled:opacity-80' disabled={!vote && sendButtonMessage === 'Vote Now'} onClick={sendVote}>
        {sendButtonMessage}
      </button>
    </div>
  )
}