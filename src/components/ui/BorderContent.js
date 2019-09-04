import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const BorderContent = ({children, sides, color, size}) => {
  const borderSize = size ? `${size}` : "2px"
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
    <Container className={`${color ? `bc-${color}` : `bc-blue`}`} border={border}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  padding: 15px;
  border-style: solid;
  border-width: ${props => props.border};
`

BorderContent.propTypes = {
  children: PropTypes.node.isRequired,
  sides: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}
