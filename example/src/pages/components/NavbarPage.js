import React from "react"
import { BorderContent, Navbar, Nav, NavLink, Table } from "react-cuttlefish"

import ComponentsLayout from "./../../layouts/ComponentsLayout"

const NavbarPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Navbar</h3>
      <p>Easy to use navbar for quick and easy site navigation that looks good.</p>
    </div>
    <div className="mb-md">
      <BorderContent sides="true true false true" color="light-grey" size="3" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Navbar>
          <Nav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Getting Started</NavLink>
            <NavLink href="#">Components</NavLink>
          </Nav>
        </Navbar>
      </BorderContent>
      <code><span className="text-yellow">import</span> Navbar, Nav, NavLink <span className="text-warning">from</span> "react-cuttlefish"</code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Colors</h4>
      <BorderContent sides="true true false true" color="light-grey" size="3" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <div className="mb-sm">
          <Navbar color="black">
            <Nav>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Getting Started</NavLink>
              <NavLink href="#">Components</NavLink>
            </Nav>
          </Navbar>
        </div>
        <div className="mb-sm">
          <Navbar color="blue">
            <Nav>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Getting Started</NavLink>
              <NavLink href="#">Components</NavLink>
            </Nav>
          </Navbar>
        </div>
        <div className="mb-sm">
          <Navbar color="green">
            <Nav>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Getting Started</NavLink>
              <NavLink href="#">Components</NavLink>
            </Nav>
          </Navbar>
        </div>
      </BorderContent>
      <code><span className="text-yellow">import</span> Button <span className="text-warning">from</span> "react-cuttlefish"</code>
    </div>
    <div className="mb-md">
      <h4>API</h4>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>node</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>gray</td>
            <td>You can change the color to any of the provided theme colors or custom colors that you add when initializing the theme</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)

export default NavbarPage

