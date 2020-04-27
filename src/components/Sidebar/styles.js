import styled from 'styled-components'

export const SidebarWrapper = styled.aside`

  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 5px  rgba(0, 0, 0, .2);
  &:hover {
    box-shadow: 0 0 8px  rgba(0, 0, 0, .5);
  }
  
 position: fixed;
  background: var(--borders);
  height: 80vh;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  margin: 1.5rem;
`;
