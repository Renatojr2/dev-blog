import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'


export const Avatar = styled(Img) `
 border-radius: 50%;
 height: 5rem;
 width: 5rem;
 margin: 15px auto;

${media.lessThan('large')`
  height: 1.845rem;
  width: 1.845rem;
`}

`;