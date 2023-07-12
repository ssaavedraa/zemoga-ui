'use client'

import { useState } from 'react'
import { postVote } from '../services/votingService'
import { UseVoteHook } from '../types/types'

export const useVote = (id: number): UseVoteHook => {
  const [vote, setVote] = useState<'positive' | 'negative' | undefined>(undefined)
  const [sendButtonMessage, setSendButtonMessage] = useState<'Vote Now' | 'Vote Again'>('Vote Now')

  const handleVoteSelection = (value: 'positive' | 'negative' | undefined) => {
    setVote((prevState) => prevState === value ? undefined : value)
  }

  const isButtonSelected = (value: 'positive' | 'negative') => {
    return vote === value
  }

  const sendVote = async () => {
    if (sendButtonMessage === 'Vote Again') {
      setSendButtonMessage('Vote Now')
    }

    try {
      await postVote({id, vote: (vote as string)})

      setSendButtonMessage('Vote Again')
      setVote(undefined)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return {
    vote,
    sendButtonMessage,
    handleVoteSelection,
    isButtonSelected,
    sendVote
  }
}