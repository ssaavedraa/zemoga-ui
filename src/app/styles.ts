interface CardContainerStyleProperties {
  cardContainer: string
}

export interface CardContainerStyles {
  grid: CardContainerStyleProperties
  list: CardContainerStyleProperties
}

export const cardContainerStyles: CardContainerStyles = {
  grid: {
    cardContainer: 'flex h-full overflow-x-scroll sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-[10px] sm:content-stretch sm:place-items-center'
  },
  list: {
    cardContainer: 'flex flex-col'
  }
}