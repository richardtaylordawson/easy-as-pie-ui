import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Navbar, Nav, NavLink, NavText } from "./../components"
import { EasyAsPieUITheme } from "easy-as-pie-ui"
import ReactIcon from "./../images/react-icon.svg"

export const MainLayout = ({ children }) => (
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
        <NavLink href="/components/section">Components</NavLink>
      </Nav>
    </Navbar>
    <main>{children}</main>
  </Fragment>
)

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

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
