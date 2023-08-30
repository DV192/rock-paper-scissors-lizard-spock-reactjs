import IconRock from '../assets/images/icon-rock.svg'
import IconPaper from '../assets/images/icon-paper.svg'
import IconScissors from '../assets/images/icon-scissors.svg'
import IconLizard from '../assets/images/icon-lizard.svg'
import IconSpock from '../assets/images/icon-spock.svg'

export const data = [
  {
    id: 'icon-rock',
    img: IconRock,
    className: 'icon_rock',
    isSelected: false,
    win: ['icon-scissors', 'icon-lizard']
  },
  {
    id: 'icon-paper',
    img: IconPaper,
    className: 'icon_paper',
    isSelected: false,
    win: ['icon-rock', 'icon-spock']
  },
  {
    id: 'icon-scissors',
    img: IconScissors,
    className: 'icon_scissors',
    isSelected: false,
    win: ['icon-paper', 'icon-lizard']
  },
  {
    id: 'icon-lizard',
    img: IconLizard,
    className: 'icon_lizard',
    isSelected: false,
    win: ['icon-paper', 'icon-spock']
  },
  {
    id: 'icon-spock',
    img: IconSpock,
    className: 'icon_spock',
    isSelected: false,
    win: ['icon-rock', 'icon-scissors']
  },
]