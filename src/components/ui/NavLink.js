import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.li`
  display: inline;
  cursor: pointer;
  margin: 15px;
  color: ${props => props.activeLink ? "#fff": "rgba(255, 255, 255, 0.8)"};

  a {
    position: relative;
    color: inherit;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      color: #fff;
    }

    &:hover::before {
      transform: translate(-50%, 0) scaleX(1);
    }
  }
`

const NavLink = ({children, active, href}) => (
  <Container activeLink={active}>
    <a href={href}>{children}</a>
  </Container>
)

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string.isRequired
}

export default NavLink
