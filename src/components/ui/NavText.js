import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.div`
  display: inline;
  cursor: pointer;
  margin: 15px;
  color: #fff;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const NavText = ({children, href, target}) => (
  <Container>
    {
      (href)
        ? <a href={href} target={target ? target : ""}>{children}</a>
        : {children}
    }
  </Container>
)

NavText.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
}
