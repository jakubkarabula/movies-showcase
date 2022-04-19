import styled from 'styled-components'
import {
  colors,
  desktopMargin,
  maxWidth,
  mobileMargin,
  mobileWidth,
} from './Styles'

const Section = styled.section<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
`

const Headings = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth};
  margin: auto;
  gap: 1rem;

  h1,
  h2 {
    margin: 0 ${mobileMargin};
  }

  @media only screen and (min-width: ${mobileWidth}) {
    h1,
    h2 {
      margin: 0 ${desktopMargin};
    }
  }
`

const HeaderLogo = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;

  div {
    display: block;
    margin: 1.5rem ${mobileMargin};
  }

  @media only screen and (min-width: ${mobileWidth}) {
    & > div {
      margin: 1.5rem ${desktopMargin};
    }
  }
`

const Header = () => {
  return (
    <>
      <Section backgroundColor={colors.white}>
        <HeaderLogo>
          <div>Showcase for OMDb API</div>
        </HeaderLogo>
      </Section>

      <Section backgroundColor={colors.gray[400]}>
        <Headings>
          <h1 data-testid='site-header'>Movies</h1>
          <h2 data-testid='site-subheader'>Find all your favorite movies.</h2>
        </Headings>
      </Section>
    </>
  )
}

export default Header
