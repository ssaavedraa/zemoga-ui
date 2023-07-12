export interface PeopleData {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: Votes
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
