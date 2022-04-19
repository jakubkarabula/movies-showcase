import styled from 'styled-components'
import { colors, fontWeight, mobileWidth } from './Styles'
import { Link as RouterLink } from 'react-router-dom'
import MoviePoster from './MoviePoster'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const Title = styled.span`
  display: block;
  font-weight: ${fontWeight.black};
  font-size: 40px;
  color: ${colors.black};
  margin-bottom: 1rem;
`

const PublishedAt = styled.time`
  color: ${colors.gray[800]};
  font-size: 14px;
  margin-bottom: 1rem;
`

const Intro = styled.div`
  color: ${colors.gray[800]};
  font-size: 18px;
  margin: 1rem 0;
`

const Read = styled.span`
  text-transform: uppercase;
  color: ${colors.blue};
  font-size: 14px;
`

const Article = styled.article`
  padding: 10px;
  border-radius: 10px;

  @media only screen and (min-width: ${mobileWidth}) {
    padding: 20px;
    border-radius: 20px;
  }

  &:hover {
    background-color: ${colors.gray[400]};
  }
`

const Link = styled(RouterLink)`
  text-decoration: none;
`

const Card = (props: Movie) => {
  return (
    <Link to={'/movie?id=' + props.imdbID}>
      <Article>
        <MoviePoster
          url={props.Poster}
          alt={props.Title + ' poster'}
          size='small'
        />
        <Title data-testid='card-title'>{props.Title}</Title>

        <PublishedAt data-testid='card-date'>
          Released: {props.Year}
        </PublishedAt>

        <Intro>{props.Type}</Intro>
        <Read>READ MORE</Read>
      </Article>
    </Link>
  )
}

export default Card
