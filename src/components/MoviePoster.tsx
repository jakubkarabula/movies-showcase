import styled from 'styled-components'
import { colors, mobileWidth } from './Styles'

const Image = styled.img<{ size: 'small' | 'big' }>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
  border-radius: 16px;
  margin-bottom: 0.5rem;
  background-color: ${colors.gray[400]};

  @media only screen and (min-width: ${mobileWidth}) {
    gap: 1.5rem;

    ${(props) =>
      props.size === 'big'
        ? `
        width: auto;
        height: 400px;
    `
        : `
        height: 264px;
    `}
  }
`

type MoviePosterProps = {
  url: string
  alt: string
  size: 'big' | 'small'
}

const MoviePoster = ({ url, alt, size }: MoviePosterProps) => (
  <Image src={url} alt={alt} loading='lazy' size={size} />
)

export default MoviePoster
