import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { ReactCuttlefishTheme, Navbar, Nav, NavLink, NavText } from "react-cuttlefish"

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
      <ReactCuttlefishTheme />
      <Navbar color="blue">
        <NavText href="/">
          <NavLogo>
            <img src={ReactIcon} alt="Logo" />
            <h4 className="mb-xs inline">reactCuttleFish</h4>
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
