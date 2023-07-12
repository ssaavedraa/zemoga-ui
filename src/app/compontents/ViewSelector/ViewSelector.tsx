'use client'

import { UseViewHook, ViewOptions } from '@/app/types/types'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

const options: ViewOptions[] = [ViewOptions.LIST, ViewOptions.GRID]

export default function ViewSelector ({ selectedOption, showOptions, toggleShowOptions, handleOptionChange }: UseViewHook) {
  return (
    <>
      <div className='hidden md:flex text-black border-black border-2 w-[131px] h-[28px] flex-row justify-center items-center py-2 text-[10.5px] relative'>
        <span className='font-bold w-[92px] text-center capitalize'>{selectedOption}</span>
        {showOptions ? <AiOutlineCaretUp className='hover:cursor-pointer' onClick={toggleShowOptions}/> :<AiOutlineCaretDown width={14} height={14} className='hover:cursor-pointer' onClick={toggleShowOptions}/>}
        <div className='absolute flex flex-col top-[100%] bg-white z-30'>
        {showOptions && options.map((option) => (
            <div key={option} className='text-black border-black border-2 w-[131px] h-[28px] text-center text-[10.5px] flex justify-center items-center bg-white mb-[-2px] hover:bg-[#bebebe] shadow-lg hover:cursor-pointer capitalize' onClick={() => handleOptionChange(option)}>
              {option}
            </div>
        ))}
        </div>
      </div>

    </>
  )
}