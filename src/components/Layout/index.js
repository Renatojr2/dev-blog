import React from "react"
import PropTypes from "prop-types"
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'
import {LayoutMain, LayoutWrapper, Container} from './styles'
import GlobalStyled from '../../styles/global'




const Layout = ({ children }) => {


  return (
    <LayoutWrapper>
      <GlobalStyled />
      <Sidebar />
      <Container>
        <LayoutMain>{children}</LayoutMain>
      </Container>
      <MenuBar />
    </LayoutWrapper>
   
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
