import React from "react"
import { Global, css } from "@emotion/core"

import colors from "./color"

const ReactCuttlefishTheme = ({theme}) => {

  // Override any colors that are passed in
  colors.primary = theme.primary ? theme.primary : colors.primary
  colors.secondary = theme.secondary ? theme.secondary : colors.secondary
  colors.success = theme.success ? theme.success : colors.success
  colors.danger = theme.danger ? theme.danger : colors.danger
  colors.info = theme.info ? theme.info : colors.info
  colors.light = theme.light ? theme.light : colors.light
  colors.dark = theme.dark ? theme.dark : colors.dark
  colors.muted = theme.muted ? theme.muted : colors.muted
  colors.white = theme.white ? theme.white : colors.white

  return (
    <Global
      styles={css`
        /* Text Alignment */
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }

        /* Float */
        .pull-left { float: left; }
        .pull-right { float: right; }

        /* Center Block */
        .center-block {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        /* Display */
        .show { display: block; }
        .hidden { display: none; }
        .invisible { visibility: hidden; }

        /* Text Color */
        .text-primary { color: ${colors.primary}; }
        .text-secondary { color: ${colors.secondary}; }
        .text-success { color: ${colors.success}; }
        .text-danger { color: ${colors.danger}; }
        .text-info { color: ${colors.info}; }
        .text-light { color: ${colors.light}; }
        .text-dark { color: ${colors.dark}; }
        .text-muted { color: ${colors.muted}; }
        .text-white { color: ${colors.white}; }

        /* Background Color */
        .bg-primary { background-color: ${colors.primary}; }
        .bg-secondary { background-color: ${colors.secondary}; }
        .bg-success { background-color: ${colors.success}; }
        .bg-danger { background-color: ${colors.danger}; }
        .bg-info { background-color: ${colors.info}; }
        .bg-light { background-color: ${colors.light}; }
        .bg-dark { background-color: ${colors.dark}; }
        .bg-muted { background-color: ${colors.muted}; }
        .bg-white { background-color: ${colors.white}; }

        /* Padding */
        .pb-15 { padding-bottom: 15px; }
        .pb-30 { padding-bottom: 30px; }
        .pb-45 { padding-bottom: 45px; }
        .pb-60 { padding-bottom: 60px; }
        .pt-15 { padding-top: 15px; }
        .pt-30 { padding-top: 30px; }
        .pt-45 { padding-top: 45px; }
        .pt-60 { padding-top: 60px; }

        /* Margin */
        .mb-15 { margin-bottom: 15px; }
        .mb-30 { margin-bottom: 30px; }
        .mb-45 { margin-bottom: 45px; }
        .mb-60 { margin-bottom: 60px; }
        .mt-15 { margin-top: 15px; }
        .mt-30 { margin-top: 30px; }
        .mt-45 { margin-top: 45px; }
        .mt-60 { margin-top: 60px; }
      `}
    />
  )
}
export default ReactCuttlefishTheme
