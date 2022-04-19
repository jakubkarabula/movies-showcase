import { Movie } from '../components/Card'
import { orderByType } from '../components/CardSorting'

export const compareCards = (a: Movie, z: Movie, orderBy: orderByType) => {
  if (orderBy === 'year') {
    return +new Date(z.Year) - +new Date(a.Year)
  } else if (orderBy === 'title') {
    return a.Title.localeCompare(z.Title)
  }

  return 0
}

export const orderCards = (cards: Array<Movie>, orderBy: orderByType) => {
  if (orderBy === 'default') return [...cards]

  return [...cards].sort((a, z) => compareCards(a, z, orderBy))
}
