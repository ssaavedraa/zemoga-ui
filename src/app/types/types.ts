export interface PeopleData {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: Votes
  id: number
}

export interface Votes {
  positive: number | string
  negative: number | string
}

export interface UseViewHook {
  showOptions: boolean
  selectedOption: ViewOptions
  toggleShowOptions: () => void
  handleOptionChange: (option: ViewOptions) => void
}

export enum ViewOptions {
  LIST = 'list',
  GRID = 'grid'
}

export interface UseVoteHook {
  vote: 'positive' | 'negative' | undefined
  sendButtonMessage: 'Vote Now' | 'Vote Again'
  handleVoteSelection: (value: 'positive' | 'negative') => void
  isButtonSelected: (value: 'positive' | 'negative') => boolean
  sendVote: () => void
}
