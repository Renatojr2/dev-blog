import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`

  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 5px  rgba(0, 0, 0, .2);
  &:hover {
    box-shadow: 0 0 7px  rgba(0, 0, 0, .3);
  }
  
 position: fixed;
  background: var(--borders);
  height: 80vh;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  margin: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
    align-items: flex-start;
    height: auto;
    padding: 0.8rem 2rem;
    width: 100%;
  `}
`;


