import styled from "styled-components"
import { Link } from "gatsby"
import media from 'styled-media-query'

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: row;

    margin: 0;
    align-items: flex-start;
    height: auto;
    padding: 0.5rem 1rem;
    width: 100%;
    border: 1px solid black;
    

    position: fixed;
    bottom: 0;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(Link)`
  display: block;

  ${media.lessThan('large')`
    display: flex;
  `}
`

export const MenuBarItem = styled.span`
  color:var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &.light {
    color: #d4d400;
    
    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`