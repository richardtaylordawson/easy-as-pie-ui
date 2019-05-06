import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
`

const Header = styled.div`
  background-color: ${props => props.headerColor ? props.headerColor: "white"};
  padding: 15px 32px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const Content = styled.div`
  text-align: center;
  padding: 45px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

const Card = ({children, headerColor}) => (
  <Container>
    <Header headerColor={headerColor}>{children[0]}</Header>
    <Content>{children[1]}</Content>
  </Container>
)

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
