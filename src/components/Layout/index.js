import React from "react"
import PropTypes from "prop-types"
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'
import {LayoutMain, LayoutWrapper} from './styles'
import GlobalStyled from '../../styles/global'




const Layout = ({ children }) => {


  return (
    <LayoutWrapper>
      <GlobalStyled />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
      <MenuBar />
    </LayoutWrapper>
   
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
