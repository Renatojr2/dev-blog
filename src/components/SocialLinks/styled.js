import styled from "styled-components"
import media from 'styled-media-query'

export const SocialLinksWrapper = styled.nav`
  margin: 2.5rem auto;
  width: 100%;

  ${media.lessThan('large')`
    display: none;
    .show {
      display: block;
    }
  `}

`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  margin-left: 2rem;
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 35px;
  height: 35px;
`