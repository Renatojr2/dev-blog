import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;
  width: 100%

  ${media.lessThan('large')`
    flex-direction: column;
    width: 100vw;
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
  margin-right: 1rem;


  ${media.lessThan('large')`
    left: 0;
    margin: 5rem .3rem;
    margin-right: 3rem;

  `}
`;