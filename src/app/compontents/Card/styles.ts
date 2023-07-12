interface CardStyleProperties {
  card: string
  cardIcon: string
  image: string
  dataContainer: string
  name: string
  description: string
  lastUpdate: string
  buttonContainer: string
}

export interface CardStyles {
  grid: CardStyleProperties
  list: CardStyleProperties
}

export const cardStyles: CardStyles = {
  grid: {
    card: 'min-w-[300px] sm:min-w-[351px] h-[300px] sm:h-auto relative mr-4t bg-gradient-to-t from-[#0000009d] to-transparent mr-5 sm:m-0 aspect-square',
    cardIcon: 'w-8 h-8 absolute top-[90px] flex items-center',
    image: 'absolute w-full h-full -z-10',
    dataContainer: 'h-full flex flex-col justify-end pb-9 m-auto px-8',
    name: 'font-regular text-3xl line-clamp-2',
    description: 'line-clamp-2 mt-[7px] text-[15px] mb-3 leading-normal',
    lastUpdate: 'font-bold text-xs text-right',
    buttonContainer: 'my-3 flex flex-row justify-end items-center',
  },
  list: {
    card: 'min-w-full card-gradient flex flex-row justify-end relative h-[138px] overflow-y-clip my-2',
    cardIcon: 'w-8 h-8 absolute top-0 left-0 flex items-center',
    image: 'absolute w-[180px] -left-[15px] top-[calc(50%-95px)] -z-10',
    dataContainer: 'w-[370px] mr-[232px]',
    name: 'text-[28px] font-regular line-clamp-1',
    description: 'line-clamp-2 mt-[7px] mb-3 text-[15px] leading-normal',
    lastUpdate: 'absolute right-[12px] top-[8px]',
    buttonContainer: 'absolute right-[12px] top-[37px]',
  }
}
