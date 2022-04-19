import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { initialState } from '../Redux/Store'
import { mockMovies, mockMoviesSearch, setupStore } from './helpers'
import { BrowserRouter } from 'react-router-dom'
import SearchPage from '../pages/Search'

const defaults = [
  'Game of Thrones',
  'Game of Thrones: The Last Watch',
  'Game of Thrones: A Telltale Games Series',
  'Game of Thrones',
  'Game of Thrones Conquest &amp; Rebellion: An Animated History of the Seven Kingdoms',
  'Game of Thrones: Season 2 - Character Profiles',
  'Game of Thrones: The Story So Far',
  'Game of Thrones: Costumes',
  'Game of Thrones: A Day in the Life',
  'Game of Thrones: Season 2 - Invitation to the Set',
]

const titles = [
  'Game of Thrones',
  'Game of Thrones',
  'Game of Thrones Conquest &amp; Rebellion: An Animated History of the Seven Kingdoms',
  'Game of Thrones: A Day in the Life',
  'Game of Thrones: A Telltale Games Series',
  'Game of Thrones: Costumes',
  'Game of Thrones: Season 2 - Character Profiles',
  'Game of Thrones: Season 2 - Invitation to the Set',
  'Game of Thrones: The Last Watch',
  'Game of Thrones: The Story So Far',
]

const years = [
  'Released: 2011–2019',
  'Released: 2019',
  'Released: 2017',
  'Released: 2017',
  'Released: 2015',
  'Released: 2014',
  'Released: 2013',
  'Released: 2012',
  'Released: 2012',
  'Released: 2011',
]

const searchResults = [
  'Euphoria',
  'Euphoria',
  'Euphoria',
  'Euphoria',
  'Euphoria',
  'The Euphoria of Being',
  'Euphoria',
  'Euphoria',
  'Euphoria',
  'Feels Like Euphoria',
]

const renderApp = () => {
  render(
    <BrowserRouter>
      <Provider
        store={setupStore({
          ...initialState,
          cards: mockMovies,
          shownCards: mockMovies,
        })}
      >
        <SearchPage />
      </Provider>
    </BrowserRouter>
  )
}

describe('Test interactions', () => {
  it('Sorts by default provided from API', () => {
    renderApp()

    const cardsTitles = screen
      .getAllByTestId('card-title')
      .map((card) => card.innerHTML)

    expect(cardsTitles).toEqual(defaults)
  })

  it('Sort by title when title tag is selected', () => {
    renderApp()

    const titleTag = screen.getByTestId('order-by-title')
    expect(titleTag).toBeInTheDocument()
    fireEvent.click(titleTag)

    const cardsTitles = screen
      .getAllByTestId('card-title')
      .map((card) => card.innerHTML)

    expect(cardsTitles).toEqual(titles)
  })

  it('Sort by date when year tag is selected', async () => {
    renderApp()

    const dateTag = screen.getByTestId('order-by-year')
    expect(dateTag).toBeInTheDocument()
    fireEvent.click(dateTag)

    const cardDates = screen
      .getAllByTestId('card-date')
      .map((card) => card.innerHTML)

    expect(cardDates).toEqual(years)
  })

  it('Searches by text', async () => {
    ;(global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({
          Response: 'True',
          Search: mockMoviesSearch,
        }),
      })
    )

    renderApp()

    const searchInput = screen.getByTestId('movies-search')
    fireEvent.change(searchInput, { target: { value: 'Euphoria' } })

    await waitFor(() => {
      const cardsTitles = screen
        .getAllByTestId('card-title')
        .map((card) => card.innerHTML)

      expect(cardsTitles).toEqual(searchResults)
    })
  })
})
