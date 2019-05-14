import React, { Component } from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Container = styled.div`
  max-width: 658px;
  margin: 20px auto;

  &.open {
    .accordion-header:before { content: "-"; }
    .accordion-content { display: block; }
  }

  .accordion-header:before {
    content: "+";
    position: absolute;
    color: white;
    right: 15px;
    top: -21px;
    font-size: 50px;
  }

  .accordion-content { display: none; }
`

const Header = styled.div`
  padding: 10px 50px 10px 23px;
  cursor: pointer;
  position: relative;

  * { margin-bottom: 0; }
`

const Content = styled.div`
  padding: 30px 55px;
`

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  toggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render () {
    return (
      <Container className={`bg-muted ${this.state.open && "open"}`}>
        <Header className={`accordion-header ${this.props.color ? `bg-${this.props.color} text-white` : `bg-primary text-white`}`} onClick={this.toggle.bind(this)}>
          {this.props.children[0]}
        </Header>
        <Content className="bg-light accordion-content">
          {this.props.children[1]}
        </Content>
      </Container>
    )
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired
}

export default Accordion
