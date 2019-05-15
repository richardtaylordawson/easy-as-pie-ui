import React from "react"
import PropTypes from "prop-types"

import { ReactCuttlefishTheme } from "react-cuttlefish"

const MainLayout = ({ children }) => (
  <div>
    <ReactCuttlefishTheme />
    <main>{children}</main>
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
