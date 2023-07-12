export interface PeopleData {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: Votes
}

interface Votes {
  positive: number
  negative: number
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
