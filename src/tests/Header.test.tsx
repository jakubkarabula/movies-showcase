import { render, screen } from '@testing-library/react'
import { Header } from '../components'

describe('verify texts', () => {
  it('Finds header', () => {
    render(<Header />)

    const headerElement = screen.getByTestId('site-header')
    expect(headerElement).toBeInTheDocument()
    expect(headerElement.innerHTML).toEqual('Movies')
  })

  it('Finds subheader', () => {
    render(<Header />)

    const subheaderElement = screen.getByTestId('site-subheader')
    expect(subheaderElement).toBeInTheDocument()
    expect(subheaderElement.innerHTML).toEqual('Find all your favorite movies.')
  })
})
