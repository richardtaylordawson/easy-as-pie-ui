import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.div`
  padding: 5px 16px;
  border-style: solid;
  border-width: ${props => props.border};
`

const BorderContent = ({children, sides, color, size}) => {

  const borderSize = size ? `${size}px` : "2px"
  let border;

  if(sides) {
    border = sides.split(" ").reduce((acc, current) => {
      acc += (current === "true")
        ? ` ${borderSize}`
        : " 0"

      return acc;
    }, "")
  } else {
    border = `0 0 0 ${borderSize}`
  }

  return (
    <Container className={`${color ? `bc-${color}` : `bc-primary`}`} border={border}>
      {children}
    </Container>
  )
}

BorderContent.propTypes = {
  children: PropTypes.node.isRequired,
  borderSides: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string
}

export default BorderContent
