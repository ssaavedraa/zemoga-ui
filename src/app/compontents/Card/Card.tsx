import Image from 'next/image'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

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
}

export default function Card ({ name, description, category, picture, lastUpdated, votes }: CardProps) {
  return (
    <div className='min-w-[300px] md:min-w-[351px] h-[300px] md:h-auto relative mr-4t bg-gradient-to-t from-[#0000009d] to-transparent mr-5 md:m-0 aspect-square'>
      <div className='bg-yellow-500 w-8 h-8 absolute top-[90px] flex items-center'>
        <FaThumbsDown className='m-auto'/>
      </div>
      <Image src={`/images${picture}`} alt={name} width={300} height={300} className='absolute w-full h-full -z-10'/>
      <div className='h-full flex flex-col justify-end pb-9 m-auto px-8'>
        <span className='font-regular text-3xl line-clamp-2'>{name}</span>
        <small className='line-clamp-2 mt-[7px] text-[15px] mb-3 leading-normal'>{description}</small>
        <strong className='font-bold text-xs text-right'>1 month ago in <span className='capitalize'>{category}</span></strong>
        <div className='my-3 flex flex-row justify-end items-center'>
          <button className='bg-teal-500 w-8 h-8 mx-[6px]'>
            <FaThumbsUp className='m-auto'/>
          </button>
          <button className='bg-yellow-500 w-8 h-8 mx-[6px]'>
            <FaThumbsDown className='m-auto'/>
          </button>
          <button className='text-center px-3 py-1 text-lg bg-black bg-opacity-60 border-white border-[1px] w-[107px] h-[38px] ml-[6px]'>
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