import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { StoreState } from '../Redux/Store'
import Card from './Card'
import { maxWidth, mobileWidth } from './Styles'

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  @media only screen and (min-width: ${mobileWidth}) {
    padding: 0 20px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${maxWidth};
  padding-bottom: 1.5rem;
`

const selectCards = (state: StoreState) => state.shownCards

type CardContainerProps = {
  loading?: boolean
  error?: string
}

const CardContainer = ({ loading, error }: CardContainerProps) => {
  const cards = useSelector(selectCards)

  return (
    <Container>
      {loading && <span>Loading...</span>}

      {error && (
        <span data-testid='no-cards-message'>
          Something went wrong. {error}
        </span>
      )}

      <Cards>
        {cards.map((card) => (
          <Card key={card.imdbID} {...card} />
        ))}
      </Cards>
    </Container>
  )
}

export default CardContainer
