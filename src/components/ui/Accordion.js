import React, { Component } from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

export class Accordion extends Component {
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
      <Container className={`bg-grey ${this.state.open && "open"}`}>
        <Header className={`accordion-header ${this.props.color ? `bg-${this.props.color} text-white` : `bg-blue text-white`}`} onClick={this.toggle.bind(this)}>
          {this.props.children[0]}
        </Header>
        <Content className="accordion-content">
          {this.props.children[1]}
        </Content>
      </Container>
    )
  }
}

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
  background-color: #eee;
`

Accordion.propTypes = {
  children: PropTypes.node.isRequired
}
