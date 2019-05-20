import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { ReactCuttlefishTheme, Navbar, Nav, NavLink } from "react-cuttlefish"

const MainLayout = ({ children }) => (
  <Fragment>
    <ReactCuttlefishTheme />
    <Navbar color="red">
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Getting Started</NavLink>
        <NavLink href="/components/accordion">Components</NavLink>
      </Nav>
    </Navbar>
    <main>{children}</main>
  </Fragment>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
