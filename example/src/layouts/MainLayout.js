import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { EasyAsPieUITheme, Navbar, Nav, NavLink, NavText } from "easy-as-pie-ui"

import ReactIcon from "./../images/react-icon.svg"

const NavLogo = styled.div`
  padding-left: 20px;

  img {
    width: 40px;
    position: absolute;
    left: 20px;
    top: 16px;
  }

  h4 {
    margin-left: 20px;
  }
`

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <EasyAsPieUITheme />
      <Navbar color="blue">
        <NavText href="/">
          <NavLogo>
            <img src={ReactIcon} alt="Logo" />
            <h4 className="mb-xs inline">Easy as Pie UI</h4>
          </NavLogo>
        </NavText>
        <Nav>
          <NavLink href="/" active>Home</NavLink>
          <NavLink href="/getting-started">Getting Started</NavLink>
          <NavLink href="/components/accordion">Components</NavLink>
        </Nav>
      </Navbar>
      <main>{children}</main>
    </Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
