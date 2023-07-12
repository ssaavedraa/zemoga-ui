import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

interface VotingBoxProps {
  styles: string
}

export default function VotingBox ({ styles }: VotingBoxProps) {
  return (
    <div className={styles}>
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
  )
}