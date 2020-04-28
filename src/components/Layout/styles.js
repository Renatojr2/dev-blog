import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
  
 
   

`;


export const LayoutMain = styled.main`
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;


`;

export const Container = styled.div`
  position: relative;
  left: 360px;
`;