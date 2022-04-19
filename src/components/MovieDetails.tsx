import styled from 'styled-components'
import { MovieResponse } from '../Api'
import { mobileWidth } from './Styles'
import Tag from './Tag'

const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 0.5rem;

  @media only screen and (min-width: ${mobileWidth}) {
    gap: 1rem;
  }
`

const Ratings = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  @media only screen and (min-width: ${mobileWidth}) {
    flex-direction: row;
  }
`

const MovieDetails = ({ movie }: { movie: MovieResponse }) => (
  <Details>
    <h1>{movie.Title}</h1>

    <span>{movie.Plot}</span>

    <h3>Released: {movie.Released}</h3>

    <Ratings>
      {movie.Ratings.map((rating) => (
        <Tag content={rating.Source + ': ' + rating.Value} size='small' />
      ))}
      {movie.Metascore && (
        <Tag content={'Metascore: ' + movie.Metascore} size='small' />
      )}
    </Ratings>
  </Details>
)

export default MovieDetails
