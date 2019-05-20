import React from "react"
import { Global, css } from "@emotion/core"
import hexHSL from "hex-to-hsl"
import hexRGB from "hex-rgb"

import Colors from "./Colors"
import Spacing from "./Spacing"
import Breakpoints from "./Breakpoints"

const ReactCuttlefishTheme = ({colors = {}, spacing = {}}) => {

  Object.keys(Colors).map(key => ( Colors[key] = colors.hasOwnProperty(key) ? colors[key] : Colors[key] ))
  Object.keys(Spacing).map(key => ( Spacing[key] = spacing.hasOwnProperty(key) ? spacing[key] : Spacing[key] ))

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          font-family: sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: #000;
        }

        article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
          display: block;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #FFF;
        }

        [tabindex="-1"]:focus {
          outline: 0 !important;
        }

        hr {
          box-sizing: content-box;
          height: 10;
          overflow: visible;
          border: 0.5px solid #ccc;
        }

        h1, h2, h3, h4, h5, h6 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        abbr[title],
        abbr[data-original-title] {
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
          cursor: help;
          border-bottom: 0;
          -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
        }

        address {
          margin-bottom: 1rem;
          font-style: normal;
          line-height: inherit;
        }

        ol,
        ul,
        dl {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        ol ol,
        ul ul,
        ol ul,
        ul ol {
          margin-bottom: 0;
        }

        blockquote {
          margin: 0 0 1rem;
        }

        b,
        strong {
          font-weight: bolder;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }

        sub {
          bottom: -.25em;
        }

        sup {
          top: -.5em;
        }

        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;

          &.btn:hover {
            text-decoration: none;
          }
        }

        a:hover {
          text-decoration: underline;
        }

        a:not([href]):not([tabindex]) {
          color: inherit;
          text-decoration: none;
        }

        a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
          color: inherit;
          text-decoration: none;
        }

        a:not([href]):not([tabindex]):focus {
          outline: 0;
        }

        pre,
        code,
        kbd,
        samp {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 1em;
          background-color: #323a3f;
          color: #FFF;
          padding: 15px;
          width: 100%;
          display: block;
        }

        pre {
          margin-top: 0;
          margin-bottom: 1rem;
          overflow: auto;
        }

        figure {
          margin: 0 0 1rem;
        }

        img {
          vertical-align: middle;
          border-style: none;
        }

        svg {
          overflow: hidden;
          vertical-align: middle;
        }

        table {
          border-collapse: collapse;
        }

        caption {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          color: #6c757d;
          text-align: left;
          caption-side: bottom;
        }

        th {
          text-align: inherit;
        }

        label {
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        button {
          border-radius: 0;
        }

        button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
        }

        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        button,
        input {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        select {
          word-wrap: normal;
        }

        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
          -webkit-appearance: button;
        }

        button:not(:disabled),
        [type="button"]:not(:disabled),
        [type="reset"]:not(:disabled),
        [type="submit"]:not(:disabled) {
          cursor: pointer;
        }

        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }

        input[type="radio"],
        input[type="checkbox"] {
          box-sizing: border-box;
          padding: 0;
        }

        input[type="date"],
        input[type="time"],
        input[type="datetime-local"],
        input[type="month"] {
          -webkit-appearance: listbox;
        }

        textarea {
          overflow: auto;
          resize: vertical;
        }

        fieldset {
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
        }

        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin-bottom: .5rem;
          font-size: 1.5rem;
          line-height: inherit;
          color: inherit;
          white-space: normal;
        }

        progress {
          vertical-align: baseline;
        }

        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }

        [type="search"] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }

        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }

        output {
          display: inline-block;
        }

        summary {
          display: list-item;
          cursor: pointer;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none !important;
        }

        h1, h2, h3, h4, h5, h6 {
          margin-bottom: 0.5rem;
          font-weight: 500;
          line-height: 1.2;
        }

        h1 { font-size: 3rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.75rem; }
        h4 { font-size: 1.5rem; }
        h5 { font-size: 1.25rem; }
        h6 { font-size: 1rem; }

        /* Start of Helper Classes */
        /*********************************************************/

        /* Text Alignment */
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }

        ${Breakpoints["small-up"]} {
          .text-sm-center { text-align: center; }
          .text-sm-left { text-align: left; }
          .text-sm-right { text-align: right; }
        }

        ${Breakpoints["medium-up"]} {
          .text-md-center { text-align: center; }
          .text-md-left { text-align: left; }
          .text-md-right { text-align: right; }
        }

        ${Breakpoints["large-up"]} {
          .text-lg-center { text-align: center; }
          .text-lg-left { text-align: left; }
          .text-lg-right { text-align: right; }
        }

        /* Float */
        .pull-left { float: left; }
        .pull-right { float: right; }

        /* Center Block */
        .center-block {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .center-block-lg {
          ${Breakpoints["large-up"]} {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        }

        .img-responsive {
          max-width: 100%;
          height: auto;
          width: 50%;

          ${Breakpoints["large-up"]} {
            width: 100%;
          }
        }

        /* Box Shadows */
        .box-shadow { box-shadow: 0 1px 3px ${Colors.black}; }

        /* Notch for Sections */
        .notch { position: relative; }
        .notch:before {
          content: " ";
          left: 50%;
          width: 30px;
          height: 30px;
          margin-left: -15px;
          position: absolute;
          transform: rotate(45deg);
        }

        /* Notch Position */
        .notch-bottom:before { top: 100%; margin-top: -15px; }
        .notch-top:before { bottom: 100%; margin-bottom: -15px; }

        /* Content Sizes */
        .content-xs { max-width: 522px; }
        .content-sm { max-width: 658px; }
        .content-md { max-width: 890px; }
        .content-lg { max-width: 1032px; }

        /* Display */
        .show { display: block; }
        .hidden { display: none; }
        .invisible { visibility: hidden; }
        .inline { display: inline; }

        .d-none-md-down {
          ${Breakpoints["medium-down"]} {
            display: none;
          }
        }

        .d-none-lg-up {
          ${Breakpoints["large-up"]} {
            display: none;
          }
        }

        .btn {
          cursor: pointer;
          border-radius: 5px;
          padding: 10px 47.5px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          margin: 0 10px 10px 0;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        ${Object.keys(Colors).map(key => {
          let currentHSL = hexHSL(Colors[key])
          let currentRGB = hexRGB(Colors[key])

          // Darken or lighten hover color depending on original color
          currentHSL[2] *= (currentHSL[2] * .8 < 10)
            ? 1.8
            : .8

          return `
            .btn-${key} {
              color: #FFF;
              background-color: ${Colors[key]};
              border: 1px solid ${Colors[key]};

              &:hover {
                background-color: hsl(${currentHSL[0]}, ${currentHSL[1]}%, ${currentHSL[2]}%);
                border-color: 1px solid hsl(${currentHSL[0]}, ${currentHSL[1]}%, ${currentHSL[2] }%);
                transition: all 0.3s;
              }
            }

            .btn-${key}-outline {
              color: ${Colors[key]};
              border: 1px solid ${Colors[key]};
              background-color: transparent;
              background-image: none;

              &:hover {
                background-color: ${Colors[key]};
                color: #FFF;
                transition: all 0.3s;
              }
            }

            .btn-${key}:focus,
            .btn-${key}-outline:focus {
              outline: 0;
              box-shadow: 0 0 0 0.2rem rgba(${currentRGB.red}, ${currentRGB.green}, ${currentRGB.blue}, 0.50);
            }

            .text-${key} { color: ${Colors[key]}; }
            .bg-${key} { background-color: ${Colors[key]}; }
            .bc-${key} { border-color: ${Colors[key]}; }
            .notch-${key}:before { background-color: ${Colors[key]}; }
          `
        })}

        .stronger {
          font-weight: 800;
        }

        /* Border Width */
        .bw-s-1 {
          border-width: 1px;
          border-style: solid;
        }

        .bw-s-2 {
          border-width: 2px;
          border-style: solid;
        }

        .bw-s-3 {
          border-width: 3px;
          border-style: solid;
        }

        .bw-none { border: none; }

        /* Padding */
        .pb-xs { padding-bottom: ${Spacing.xs}; }
        .pb-sm { padding-bottom: ${Spacing.sm}; }
        .pb-md { padding-bottom: ${Spacing.md}; }
        .pb-lg { padding-bottom: ${Spacing.lg}; }
        .pb-xl { padding-bottom: ${Spacing.xl}; }
        .pt-xs { padding-top: ${Spacing.xs}; }
        .pt-sm { padding-top: ${Spacing.sm}; }
        .pt-md { padding-top: ${Spacing.md}; }
        .pt-lg { padding-top: ${Spacing.lg}; }
        .pt-xl { padding-top: ${Spacing.xl}; }

        /* Margin */
        .mb-xs { margin-bottom: ${Spacing.xs}; }
        .mb-sm { margin-bottom: ${Spacing.sm}; }
        .mb-md { margin-bottom: ${Spacing.md}; }
        .mb-lg { margin-bottom: ${Spacing.lg}; }
        .mb-xl { margin-bottom: ${Spacing.xl}; }
        .mt-xs { margin-top: ${Spacing.xs}; }
        .mt-sm { margin-top: ${Spacing.sm}; }
        .mt-md { margin-top: ${Spacing.md}; }
        .mt-lg { margin-top: ${Spacing.lg}; }
        .mt-xl { margin-top: ${Spacing.xl}; }
      `}
    />
  )
}
export default ReactCuttlefishTheme
