'use client'

import { useState } from 'react'
import { UseViewHook, ViewOptions } from '../types/types'

const useView = (): UseViewHook => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState(ViewOptions.GRID)

  const toggleShowOptions = () => {
    setShowOptions((prevState) => !prevState)
  }

  const handleOptionChange = (option: ViewOptions) => {
    setSelectedOption(option)
    toggleShowOptions()
  }

  return {
    showOptions,
    selectedOption,
    toggleShowOptions,
    handleOptionChange
  }
}

export default useView