import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styles'
import {Menu} from '@styled-icons/boxicons-regular/Menu';

const Profile = () => {
  const alerta = () => {
    alert("hello!")
  }
  const { site: {
    siteMetadata: {
      title, position, description } }
  } = useStaticQuery(graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            
            title
            position
            description
            
            
          }
        }
      }
    
    `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.Content>
          <S.ProfileAuthor>{title}</S.ProfileAuthor>
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.Content>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>

      <button onClick={alerta} className='colapse' type="button">
        <Menu size={25} color="#444" />
      </button>
    </S.ProfileWrapper>
  )
}



export default Profile;