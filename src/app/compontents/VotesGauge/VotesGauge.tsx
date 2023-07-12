import { Votes } from '@/app/types/types'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

export default function VotesGauge ({ positive, negative }: Votes) {
  return (
    <div className='absolute bottom-0 w-full z-10 h-9 flex flex-row text-right'>
      <div style={{ width: positive }} className='bg-teal-500 bg-opacity-60 h-full flex flex-row items-center justify-end pl-[10px]'>
        <FaThumbsUp />
        <span className='text-[18px] ml-[6px] mr-2'>{positive}</span>
      </div>
      <div style={{ width: negative, minWidth: 'fit-content'}} className='bg-yellow-500 bg-opacity-60 h-full flex flex-row items-center justify-end pr-[10px]'>
        <span className='text-[18px] mr-[6px]'>{negative}</span>
        <FaThumbsDown />
      </div>
    </div>
  )
}