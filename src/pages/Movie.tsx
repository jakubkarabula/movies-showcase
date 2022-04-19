import { useMemo } from 'react'
import { Link as BrowserLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useGetMovie } from '../Api'
import MovieDetails from '../components/MovieDetails'
import MoviePoster from '../components/MoviePoster'
import {
  colors,
  desktopMargin,
  maxWidth,
  mobileMargin,
  mobileWidth,
} from '../components/Styles'

function useQuery() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

const Details = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 ${mobileMargin};
  flex-direction: column;

  @media only screen and (min-width: ${mobileWidth}) {
    flex-direction: row;
    margin: 0 ${desktopMargin};
    gap: 2rem;
  }
`

const Link = styled(BrowserLink)`
  text-transform: uppercase;
  color: ${colors.blue};
  font-size: 14px;
  text-decoration: none;
  width: 50px;

  margin: 0 ${mobileMargin};

  @media only screen and (min-width: ${mobileWidth}) {
    margin: 0 ${desktopMargin};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth};
  margin: 20px auto;
  gap: 1rem;
`

const Error = styled.span`
  margin: 0 ${mobileMargin};

  @media only screen and (min-width: ${mobileWidth}) {
    margin: 0 ${desktopMargin};
  }
`

const Movie = () => {
  let query = useQuery()
  const { movie, error } = useGetMovie(query)

  return (
    <Wrapper>
      <Link to={'/'}>back</Link>

      {error && (
        <Error data-testid='movie-error'>Something went wrong. {error}</Error>
      )}

      {movie && (
        <Details>
          <MoviePoster
            url={movie.Poster}
            alt={movie.Title + ' poster'}
            size='big'
          />
          <MovieDetails movie={movie} />
        </Details>
      )}
    </Wrapper>
  )
}

export default Movie
