import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { initialState } from '../Redux/Store'
import { mockMovies, setupStore } from './helpers'
import { CardContainer } from '../components'
import { BrowserRouter } from 'react-router-dom'

describe('Check cards', () => {
  it('shows no cards message error happened', () => {
    render(
      <BrowserRouter>
        <Provider store={setupStore(initialState)}>
          <CardContainer error='Request failed.' />
        </Provider>
      </BrowserRouter>
    )

    const noCardsMessage = screen.getByTestId('no-cards-message')
    expect(noCardsMessage).toBeInTheDocument()
  })

  it('shows first 10 cards', () => {
    render(
      <BrowserRouter>
        <Provider
          store={setupStore({
            ...initialState,
            shownCards: mockMovies,
          })}
        >
          <CardContainer />
        </Provider>
      </BrowserRouter>
    )

    expect(screen.getAllByTestId('card-title').length).toEqual(10)
  })
})
