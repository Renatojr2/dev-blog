import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'


export const Avatar = styled(Img) `
 border-radius: 50%;
 height: 3.75rem;
 width: 3.75rem;
 margin: auto;

${media.lessThan('large')`
  height: 1.845rem;
  width: 1.845rem;
`}

`;