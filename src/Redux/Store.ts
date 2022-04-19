import { Movie } from '../components/Card'
import { orderByType } from '../components/CardSorting'
import { orderCards } from './HelperFunctions'

export type StoreState = {
  cards: Array<Movie>
  shownCards: Array<Movie>
  orderBy: orderByType
  search: string
}

export const initialState: StoreState = {
  cards: [],
  shownCards: [],
  orderBy: 'default',
  search: 'game of thrones',
}

const types = {
  SET_CARDS: 'SET_CARDS',
  SET_ORDER_BY: 'SET_ORDER_BY',
  SET_SEARCH: 'SET_SEARCH',
  SHOW_MORE: 'SHOW_MORE',
}

export type SetCards = { type: string; cards: Array<Movie> }

export const setCards = (cards: Array<Movie>): SetCards => ({
  type: types.SET_CARDS,
  cards,
})

export type SetorderBy = { type: string; orderBy: orderByType }

export const setorderBy = (orderBy: orderByType): SetorderBy => ({
  type: types.SET_ORDER_BY,
  orderBy,
})

export type SetSearch = { type: string; search: string }

export const setSearch = (search: string): SetSearch => ({
  type: types.SET_SEARCH,
  search,
})

export type ShowMore = { type: string }

export const showMore = (): ShowMore => ({
  type: types.SHOW_MORE,
})

export type StoreActions = SetCards | SetorderBy | SetSearch

export const reducer = (state = initialState, action: StoreActions) => {
  switch (action.type) {
    case types.SET_CARDS:
      return {
        ...state,
        cards: (action as SetCards).cards,
        shownCards: orderCards((action as SetCards).cards, state.orderBy),
      }

    case types.SET_ORDER_BY:
      return {
        ...state,
        orderBy: (action as SetorderBy).orderBy,
        shownCards: orderCards(state.cards, (action as SetorderBy).orderBy),
      }

    case types.SET_SEARCH:
      return {
        ...state,
        search: (action as SetSearch).search,
      }

    default:
      return state
  }
}
