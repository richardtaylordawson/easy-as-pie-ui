'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@emotion/core');
var styled = _interopDefault(require('@emotion/styled'));
var PropTypes = _interopDefault(require('prop-types'));

var Breakpoints = {
  "small": [0, 640],
  "small-up": [0],
  "small-down": [640],
  "medium": [641, 1024],
  "medium-up": [641],
  "medium-down": [1024],
  "large": [1025, 1440],
  "large-up": [1025]
};

Object.keys(Breakpoints).map(function (key) {
  return Breakpoints[key] = Breakpoints[key].length !== 2 ? key.includes("up") ? "@media screen and (min-width: " + Breakpoints[key][0] + "px)" : "@media screen and (max-width: " + Breakpoints[key][0] + "px)" : "@media screen and (min-width: " + Breakpoints[key][0] + "px) and (max-width: " + Breakpoints[key][1] + "px)";
});

var Breakpoints_1 = Breakpoints;

var ReactCuttlefishColors = {
  "primary": "#0083f8",
  "secondary": "#6a767c",
  "success": "#00a750",
  "danger": "#ed2047",
  "warning": "#ffbc3c",
  "info": "#00a5b6",
  "light": "#f8f9fa",
  "dark": "#323a3f",
  "muted": "#9da2a7",
  "white": "#ffffff"
};

var Colors = ReactCuttlefishColors;

var Spacing = {
  "xs": "0",
  "sm": "15px",
  "md": "30px",
  "lg": "45px",
  "xl": "60px"
};

var Spacing_1 = Spacing;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(["\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        html {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: ", ";\n        }\n\n        article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n          display: block;\n        }\n\n        body {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n          font-size: 1rem;\n          font-weight: 400;\n          line-height: 1.5;\n          color: ", ";\n          text-align: left;\n          background-color: ", ";\n        }\n\n        [tabindex=\"-1\"]:focus {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 10;\n          overflow: visible;\n          border: 0.5px solid ", ";\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-top: 0;\n          margin-bottom: 0.5rem;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 1rem;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        blockquote {\n          margin: 0 0 1rem;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -.25em;\n        }\n\n        sup {\n          top: -.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n\n          &.btn:hover {\n            text-decoration: none;\n          }\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n\n        a:not([href]):not([tabindex]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):focus {\n          outline: 0;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n          font-size: 1em;\n          background-color: ", ";\n          color: ", ";\n          padding: 15px;\n          width: 100%;\n          display: block;\n          border-radius: 5px;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 1rem;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 1rem;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 0.75rem;\n          padding-bottom: 0.75rem;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 0.5rem;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type=\"button\"],\n        [type=\"reset\"],\n        [type=\"submit\"] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type=\"button\"]:not(:disabled),\n        [type=\"reset\"]:not(:disabled),\n        [type=\"submit\"]:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type=\"button\"]::-moz-focus-inner,\n        [type=\"reset\"]::-moz-focus-inner,\n        [type=\"submit\"]::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type=\"radio\"],\n        input[type=\"checkbox\"] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type=\"date\"],\n        input[type=\"time\"],\n        input[type=\"datetime-local\"],\n        input[type=\"month\"] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: .5rem;\n          font-size: 1.5rem;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type=\"number\"]::-webkit-inner-spin-button,\n        [type=\"number\"]::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type=\"search\"] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type=\"search\"]::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-bottom: 0.5rem;\n          font-weight: 500;\n          line-height: 1.2;\n        }\n\n        h1 { font-size: 3rem; }\n        h2 { font-size: 2rem; }\n        h3 { font-size: 1.75rem; }\n        h4 { font-size: 1.5rem; }\n        h5 { font-size: 1.25rem; }\n        h6 { font-size: 1rem; }\n\n        /* Start of Helper Classes */\n        /*********************************************************/\n\n        /* Text Alignment */\n        .text-center { text-align: center; }\n        .text-left { text-align: left; }\n        .text-right { text-align: right; }\n\n        ", " {\n          .text-sm-center { text-align: center; }\n          .text-sm-left { text-align: left; }\n          .text-sm-right { text-align: right; }\n        }\n\n        ", " {\n          .text-md-center { text-align: center; }\n          .text-md-left { text-align: left; }\n          .text-md-right { text-align: right; }\n        }\n\n        ", " {\n          .text-lg-center { text-align: center; }\n          .text-lg-left { text-align: left; }\n          .text-lg-right { text-align: right; }\n        }\n\n        /* Float */\n        .pull-left { float: left; }\n        .pull-right { float: right; }\n\n        /* Center Block */\n        .center-block {\n          display: block;\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .center-block-lg {\n          ", " {\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n          }\n        }\n\n        .img-responsive {\n          max-width: 100%;\n          height: auto;\n          width: 50%;\n\n          ", " {\n            width: 100%;\n          }\n        }\n\n        /* Box Shadows */\n        .box-shadow { box-shadow: 0 1px 3px ", "; }\n\n        /* Notch for Sections */\n        .notch { position: relative; }\n        .notch:before {\n          content: \" \";\n          left: 50%;\n          width: 30px;\n          height: 30px;\n          margin-left: -15px;\n          position: absolute;\n          transform: rotate(45deg);\n        }\n\n        /* Notch Position */\n        .notch-bottom:before { top: 100%; margin-top: -15px; }\n        .notch-top:before { bottom: 100%; margin-bottom: -15px; }\n\n        /* Notch Colors */\n        .notch-primary:before { background-color: ", "; }\n        .notch-secondary:before { background-color: ", "; }\n        .notch-success:before { background-color: ", "; }\n        .notch-danger:before { background-color: ", "; }\n        .notch-warning:before { background-color: ", "; }\n        .notch-info:before { background-color: ", "; }\n        .notch-light:before { background-color: ", "; }\n        .notch-dark:before { background-color: ", "; }\n        .notch-muted:before { background-color: ", "; }\n        .notch-white:before { background-color: ", "; }\n\n        /* Content Sizes */\n        .content-xs { max-width: 522px; }\n        .content-sm { max-width: 658px; }\n        .content-md { max-width: 890px; }\n        .content-lg { max-width: 1032px; }\n\n        /* Display */\n        .show { display: block; }\n        .hidden { display: none; }\n        .invisible { visibility: hidden; }\n        .inline { display: inline; }\n\n        .d-none-md-down {\n          ", " {\n            display: none;\n          }\n        }\n\n        .d-none-lg-up {\n          ", " {\n            display: none;\n          }\n        }\n\n        .btn {\n          cursor: pointer;\n          border-radius: 5px;\n          padding: 10px 47.5px;\n          text-align: center;\n          text-decoration: none;\n          display: inline-block;\n          margin: 5px;\n        }\n\n        .btn-primary {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-secondary {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-success {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-danger {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-warning {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-muted {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-primary-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-secondary-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-success-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-danger-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-warning-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-info-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-light-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-dark-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-muted-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .stronger {\n          font-weight: 800;\n        }\n        /* Text Color */\n        .text-primary { color: ", "; }\n        .text-secondary { color: ", "; }\n        .text-success { color: ", "; }\n        .text-danger { color: ", "; }\n        .text-warning { color: ", "; }\n        .text-info { color: ", "; }\n        .text-light { color: ", "; }\n        .text-dark { color: ", "; }\n        .text-muted { color: ", "; }\n        .text-white { color: ", "; }\n\n        /* Background Color */\n        .bg-primary { background-color: ", "; }\n        .bg-secondary { background-color: ", "; }\n        .bg-success { background-color: ", "; }\n        .bg-danger { background-color: ", "; }\n        .bg-warning { background-color: ", "; }\n        .bg-info { background-color: ", "; }\n        .bg-light { background-color: ", "; }\n        .bg-dark { background-color: ", "; }\n        .bg-muted { background-color: ", "; }\n        .bg-white { background-color: ", "; }\n\n        /* Border Color */\n        .bc-primary { border-color: ", "; }\n        .bc-secondary { border-color: ", "; }\n        .bc-success { border-color: ", "; }\n        .bc-danger { border-color: ", "; }\n        .bc-warning { border-color: ", "; }\n        .bc-info { border-color: ", "; }\n        .bc-light { border-color: ", "; }\n        .bc-dark { border-color: ", "; }\n        .bc-muted { border-color: ", "; }\n        .bc-white { border-color: ", "; }\n\n        /* Border Width */\n        .bw-s-1 {\n          border-width: 1px;\n          border-style: solid;\n        }\n\n        .bw-s-2 {\n          border-width: 2px;\n          border-style: solid;\n        }\n\n        .bw-s-3 {\n          border-width: 3px;\n          border-style: solid;\n        }\n\n        .bw-none { border: none; }\n\n        /* Padding */\n        .pb-xs { padding-bottom: ", "; }\n        .pb-sm { padding-bottom: ", "; }\n        .pb-md { padding-bottom: ", "; }\n        .pb-lg { padding-bottom: ", "; }\n        .pb-xl { padding-bottom: ", "; }\n        .pt-xs { padding-top: ", "; }\n        .pt-sm { padding-top: ", "; }\n        .pt-md { padding-top: ", "; }\n        .pt-lg { padding-top: ", "; }\n        .pt-xl { padding-top: ", "; }\n\n        /* Margin */\n        .mb-xs { margin-bottom: ", "; }\n        .mb-sm { margin-bottom: ", "; }\n        .mb-md { margin-bottom: ", "; }\n        .mb-lg { margin-bottom: ", "; }\n        .mb-xl { margin-bottom: ", "; }\n        .mt-xs { margin-top: ", "; }\n        .mt-sm { margin-top: ", "; }\n        .mt-md { margin-top: ", "; }\n        .mt-lg { margin-top: ", "; }\n        .mt-xl { margin-top: ", "; }\n      "], ["\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        html {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: ", ";\n        }\n\n        article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n          display: block;\n        }\n\n        body {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n          font-size: 1rem;\n          font-weight: 400;\n          line-height: 1.5;\n          color: ", ";\n          text-align: left;\n          background-color: ", ";\n        }\n\n        [tabindex=\"-1\"]:focus {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 10;\n          overflow: visible;\n          border: 0.5px solid ", ";\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-top: 0;\n          margin-bottom: 0.5rem;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 1rem;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        blockquote {\n          margin: 0 0 1rem;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -.25em;\n        }\n\n        sup {\n          top: -.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n\n          &.btn:hover {\n            text-decoration: none;\n          }\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n\n        a:not([href]):not([tabindex]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):focus {\n          outline: 0;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n          font-size: 1em;\n          background-color: ", ";\n          color: ", ";\n          padding: 15px;\n          width: 100%;\n          display: block;\n          border-radius: 5px;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 1rem;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 1rem;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 0.75rem;\n          padding-bottom: 0.75rem;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 0.5rem;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type=\"button\"],\n        [type=\"reset\"],\n        [type=\"submit\"] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type=\"button\"]:not(:disabled),\n        [type=\"reset\"]:not(:disabled),\n        [type=\"submit\"]:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type=\"button\"]::-moz-focus-inner,\n        [type=\"reset\"]::-moz-focus-inner,\n        [type=\"submit\"]::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type=\"radio\"],\n        input[type=\"checkbox\"] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type=\"date\"],\n        input[type=\"time\"],\n        input[type=\"datetime-local\"],\n        input[type=\"month\"] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: .5rem;\n          font-size: 1.5rem;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type=\"number\"]::-webkit-inner-spin-button,\n        [type=\"number\"]::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type=\"search\"] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type=\"search\"]::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-bottom: 0.5rem;\n          font-weight: 500;\n          line-height: 1.2;\n        }\n\n        h1 { font-size: 3rem; }\n        h2 { font-size: 2rem; }\n        h3 { font-size: 1.75rem; }\n        h4 { font-size: 1.5rem; }\n        h5 { font-size: 1.25rem; }\n        h6 { font-size: 1rem; }\n\n        /* Start of Helper Classes */\n        /*********************************************************/\n\n        /* Text Alignment */\n        .text-center { text-align: center; }\n        .text-left { text-align: left; }\n        .text-right { text-align: right; }\n\n        ", " {\n          .text-sm-center { text-align: center; }\n          .text-sm-left { text-align: left; }\n          .text-sm-right { text-align: right; }\n        }\n\n        ", " {\n          .text-md-center { text-align: center; }\n          .text-md-left { text-align: left; }\n          .text-md-right { text-align: right; }\n        }\n\n        ", " {\n          .text-lg-center { text-align: center; }\n          .text-lg-left { text-align: left; }\n          .text-lg-right { text-align: right; }\n        }\n\n        /* Float */\n        .pull-left { float: left; }\n        .pull-right { float: right; }\n\n        /* Center Block */\n        .center-block {\n          display: block;\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .center-block-lg {\n          ", " {\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n          }\n        }\n\n        .img-responsive {\n          max-width: 100%;\n          height: auto;\n          width: 50%;\n\n          ", " {\n            width: 100%;\n          }\n        }\n\n        /* Box Shadows */\n        .box-shadow { box-shadow: 0 1px 3px ", "; }\n\n        /* Notch for Sections */\n        .notch { position: relative; }\n        .notch:before {\n          content: \" \";\n          left: 50%;\n          width: 30px;\n          height: 30px;\n          margin-left: -15px;\n          position: absolute;\n          transform: rotate(45deg);\n        }\n\n        /* Notch Position */\n        .notch-bottom:before { top: 100%; margin-top: -15px; }\n        .notch-top:before { bottom: 100%; margin-bottom: -15px; }\n\n        /* Notch Colors */\n        .notch-primary:before { background-color: ", "; }\n        .notch-secondary:before { background-color: ", "; }\n        .notch-success:before { background-color: ", "; }\n        .notch-danger:before { background-color: ", "; }\n        .notch-warning:before { background-color: ", "; }\n        .notch-info:before { background-color: ", "; }\n        .notch-light:before { background-color: ", "; }\n        .notch-dark:before { background-color: ", "; }\n        .notch-muted:before { background-color: ", "; }\n        .notch-white:before { background-color: ", "; }\n\n        /* Content Sizes */\n        .content-xs { max-width: 522px; }\n        .content-sm { max-width: 658px; }\n        .content-md { max-width: 890px; }\n        .content-lg { max-width: 1032px; }\n\n        /* Display */\n        .show { display: block; }\n        .hidden { display: none; }\n        .invisible { visibility: hidden; }\n        .inline { display: inline; }\n\n        .d-none-md-down {\n          ", " {\n            display: none;\n          }\n        }\n\n        .d-none-lg-up {\n          ", " {\n            display: none;\n          }\n        }\n\n        .btn {\n          cursor: pointer;\n          border-radius: 5px;\n          padding: 10px 47.5px;\n          text-align: center;\n          text-decoration: none;\n          display: inline-block;\n          margin: 5px;\n        }\n\n        .btn-primary {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-secondary {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-success {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-danger {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-warning {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-muted {\n          color: ", ";\n          background-color: ", ";\n          border-color: ", ";\n        }\n\n        .btn-primary-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-secondary-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-success-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-danger-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-warning-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-info-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-light-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-dark-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .btn-muted-outline {\n          color: ", ";\n          background-color: transparent;\n          background-image: none;\n          border-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            transition: all 0.3s;\n          }\n        }\n\n        .stronger {\n          font-weight: 800;\n        }\n        /* Text Color */\n        .text-primary { color: ", "; }\n        .text-secondary { color: ", "; }\n        .text-success { color: ", "; }\n        .text-danger { color: ", "; }\n        .text-warning { color: ", "; }\n        .text-info { color: ", "; }\n        .text-light { color: ", "; }\n        .text-dark { color: ", "; }\n        .text-muted { color: ", "; }\n        .text-white { color: ", "; }\n\n        /* Background Color */\n        .bg-primary { background-color: ", "; }\n        .bg-secondary { background-color: ", "; }\n        .bg-success { background-color: ", "; }\n        .bg-danger { background-color: ", "; }\n        .bg-warning { background-color: ", "; }\n        .bg-info { background-color: ", "; }\n        .bg-light { background-color: ", "; }\n        .bg-dark { background-color: ", "; }\n        .bg-muted { background-color: ", "; }\n        .bg-white { background-color: ", "; }\n\n        /* Border Color */\n        .bc-primary { border-color: ", "; }\n        .bc-secondary { border-color: ", "; }\n        .bc-success { border-color: ", "; }\n        .bc-danger { border-color: ", "; }\n        .bc-warning { border-color: ", "; }\n        .bc-info { border-color: ", "; }\n        .bc-light { border-color: ", "; }\n        .bc-dark { border-color: ", "; }\n        .bc-muted { border-color: ", "; }\n        .bc-white { border-color: ", "; }\n\n        /* Border Width */\n        .bw-s-1 {\n          border-width: 1px;\n          border-style: solid;\n        }\n\n        .bw-s-2 {\n          border-width: 2px;\n          border-style: solid;\n        }\n\n        .bw-s-3 {\n          border-width: 3px;\n          border-style: solid;\n        }\n\n        .bw-none { border: none; }\n\n        /* Padding */\n        .pb-xs { padding-bottom: ", "; }\n        .pb-sm { padding-bottom: ", "; }\n        .pb-md { padding-bottom: ", "; }\n        .pb-lg { padding-bottom: ", "; }\n        .pb-xl { padding-bottom: ", "; }\n        .pt-xs { padding-top: ", "; }\n        .pt-sm { padding-top: ", "; }\n        .pt-md { padding-top: ", "; }\n        .pt-lg { padding-top: ", "; }\n        .pt-xl { padding-top: ", "; }\n\n        /* Margin */\n        .mb-xs { margin-bottom: ", "; }\n        .mb-sm { margin-bottom: ", "; }\n        .mb-md { margin-bottom: ", "; }\n        .mb-lg { margin-bottom: ", "; }\n        .mb-xl { margin-bottom: ", "; }\n        .mt-xs { margin-top: ", "; }\n        .mt-sm { margin-top: ", "; }\n        .mt-md { margin-top: ", "; }\n        .mt-lg { margin-top: ", "; }\n        .mt-xl { margin-top: ", "; }\n      "]);

var ReactCuttlefishTheme = function ReactCuttlefishTheme(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme;


  // Override any colors that are passed in
  Colors.primary = theme.hasOwnProperty("primary") ? theme.primary : Colors.primary;
  Colors.secondary = theme.hasOwnProperty("secondary") ? theme.secondary : Colors.secondary;
  Colors.success = theme.hasOwnProperty("success") ? theme.success : Colors.success;
  Colors.danger = theme.hasOwnProperty("danger") ? theme.danger : Colors.danger;
  Colors.warning = theme.hasOwnProperty("warning") ? theme.warning : Colors.warning;
  Colors.info = theme.hasOwnProperty("info") ? theme.info : Colors.info;
  Colors.light = theme.hasOwnProperty("light") ? theme.light : Colors.light;
  Colors.dark = theme.hasOwnProperty("dark") ? theme.dark : Colors.dark;
  Colors.muted = theme.hasOwnProperty("muted") ? theme.muted : Colors.muted;

  return React__default.createElement(core.Global, {
    styles: core.css(_templateObject, Colors.dark, Colors.dark, Colors.white, Colors.muted, Colors.dark, Colors.white, Breakpoints_1["small-up"], Breakpoints_1["medium-up"], Breakpoints_1["large-up"], Breakpoints_1["large-up"], Breakpoints_1["large-up"], Colors.black, Colors.primary, Colors.secondary, Colors.success, Colors.danger, Colors.warning, Colors.info, Colors.light, Colors.dark, Colors.muted, Colors.white, Breakpoints_1["medium-down"], Breakpoints_1["large-up"], Colors.white, Colors.primary, Colors.primary, Colors.white, Colors.secondary, Colors.secondary, Colors.white, Colors.success, Colors.success, Colors.white, Colors.danger, Colors.danger, Colors.white, Colors.warning, Colors.warning, Colors.white, Colors.muted, Colors.muted, Colors.primary, Colors.primary, Colors.primary, Colors.white, Colors.secondary, Colors.secondary, Colors.secondary, Colors.white, Colors.success, Colors.success, Colors.success, Colors.white, Colors.danger, Colors.danger, Colors.danger, Colors.white, Colors.warning, Colors.warning, Colors.warning, Colors.white, Colors.info, Colors.info, Colors.info, Colors.white, Colors.light, Colors.light, Colors.light, Colors.white, Colors.dark, Colors.dark, Colors.dark, Colors.white, Colors.muted, Colors.muted, Colors.muted, Colors.white, Colors.primary, Colors.secondary, Colors.success, Colors.danger, Colors.warning, Colors.info, Colors.light, Colors.dark, Colors.muted, Colors.white, Colors.primary, Colors.secondary, Colors.success, Colors.danger, Colors.warning, Colors.info, Colors.light, Colors.dark, Colors.muted, Colors.white, Colors.primary, Colors.secondary, Colors.success, Colors.danger, Colors.warning, Colors.info, Colors.light, Colors.dark, Colors.muted, Colors.white, Spacing_1.xs, Spacing_1.sm, Spacing_1.md, Spacing_1.lg, Spacing_1.xl, Spacing_1.xs, Spacing_1.sm, Spacing_1.md, Spacing_1.lg, Spacing_1.xl, Spacing_1.xs, Spacing_1.sm, Spacing_1.md, Spacing_1.lg, Spacing_1.xl, Spacing_1.xs, Spacing_1.sm, Spacing_1.md, Spacing_1.lg, Spacing_1.xl)
  });
};

var _templateObject$1 = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  ", " { flex-direction: column; }\n"], ["\n  display: flex;\n  flex-direction: row;\n\n  ", " { flex-direction: column; }\n"]),
    _templateObject2 = taggedTemplateLiteral(["\n  width: ", "%;\n  margin: ", ";\n\n  ", " {\n    margin: 10px 0;\n    width: 100%;\n  }\n"], ["\n  width: ", "%;\n  margin: ", ";\n\n  ", " {\n    margin: 10px 0;\n    width: 100%;\n  }\n"]);

var FlexContainer = styled.div(_templateObject$1, Breakpoints_1["medium-down"]);

var Column = styled.div(_templateObject2, function (props) {
  return 100 / props.numberOfColumns;
}, function (props) {
  return props.collapseMargin ? "0" : "30px";
}, Breakpoints_1["medium-down"]);

var Columns = function Columns(_ref) {
  var children = _ref.children,
      collapseMargin = _ref.collapseMargin;
  return React__default.createElement(
    FlexContainer,
    null,
    children.map(function (child, index, children) {
      return React__default.createElement(
        Column,
        { key: index, numberOfColumns: children.length, collapseMargin: collapseMargin },
        child
      );
    })
  );
};

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool
};

var _templateObject$2 = taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: ", ";\n"], ["\n  padding-left: 15px;\n  padding-right: 15px;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: ", ";\n"]);

var Container = styled.section(_templateObject$2, function (props) {
  return props.image && props.image;
}, function (props) {
  return props.imagePosition && props.imagePosition;
});

var Section = function Section(_ref) {
  var children = _ref.children,
      color = _ref.color,
      image = _ref.image,
      imagePosition = _ref.imagePosition,
      _ref$padding = _ref.padding,
      padding = _ref$padding === undefined ? "" : _ref$padding,
      _ref$notch = _ref.notch,
      notch = _ref$notch === undefined ? "" : _ref$notch;


  // TODO change so that it works like TRBL css
  padding = padding.split(" ");
  padding = padding.length > 1 ? "pt-" + padding[0] + " pb-" + padding[1] : "pt-xl pb-xl";

  if (notch !== "") {
    notch = notch.split(" ");
    notch = notch && "notch notch-" + notch[0] + " notch-" + notch[1];
  }

  return React__default.createElement(
    Container,
    { className: notch + " " + padding + " " + (color ? "bg-" + color : "bg-white"), image: image, imagePosition: imagePosition },
    React__default.createElement(
      "div",
      { className: "center-block content-lg" },
      children
    )
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.string,
  padding: PropTypes.string,
  notch: PropTypes.string
};

var _templateObject$3 = taggedTemplateLiteral(["\n  max-width: 658px;\n  margin: 20px auto;\n\n  &.open {\n    .accordion-header:before { content: \"-\"; }\n    .accordion-content { display: block; }\n  }\n\n  .accordion-header:before {\n    content: \"+\";\n    position: absolute;\n    color: white;\n    right: 15px;\n    top: -21px;\n    font-size: 50px;\n  }\n\n  .accordion-content { display: none; }\n"], ["\n  max-width: 658px;\n  margin: 20px auto;\n\n  &.open {\n    .accordion-header:before { content: \"-\"; }\n    .accordion-content { display: block; }\n  }\n\n  .accordion-header:before {\n    content: \"+\";\n    position: absolute;\n    color: white;\n    right: 15px;\n    top: -21px;\n    font-size: 50px;\n  }\n\n  .accordion-content { display: none; }\n"]),
    _templateObject2$1 = taggedTemplateLiteral(["\n  padding: 10px 50px 10px 23px;\n  cursor: pointer;\n  position: relative;\n\n  * { margin-bottom: 0; }\n"], ["\n  padding: 10px 50px 10px 23px;\n  cursor: pointer;\n  position: relative;\n\n  * { margin-bottom: 0; }\n"]),
    _templateObject3 = taggedTemplateLiteral(["\n  padding: 30px 55px;\n"], ["\n  padding: 30px 55px;\n"]);

var Container$1 = styled.div(_templateObject$3);

var Header = styled.div(_templateObject2$1);

var Content = styled.div(_templateObject3);

var Accordion = function (_Component) {
  inherits(Accordion, _Component);

  function Accordion(props) {
    classCallCheck(this, Accordion);

    var _this = possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.state = { open: false };
    return _this;
  }

  createClass(Accordion, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(
        Container$1,
        { className: "bg-muted " + (this.state.open && "open") },
        React__default.createElement(
          Header,
          { className: "accordion-header " + (this.props.color ? "bg-" + this.props.color + " text-white" : "bg-primary text-white"), onClick: this.toggle.bind(this) },
          this.props.children[0]
        ),
        React__default.createElement(
          Content,
          { className: "bg-light accordion-content" },
          this.props.children[1]
        )
      );
    }
  }]);
  return Accordion;
}(React.Component);

Accordion.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$4 = taggedTemplateLiteral(["\n  padding: 5px 16px;\n  border-style: solid;\n  border-width: ", ";\n"], ["\n  padding: 5px 16px;\n  border-style: solid;\n  border-width: ", ";\n"]);

var Container$2 = styled.div(_templateObject$4, function (props) {
  return props.border;
});

var BorderContent = function BorderContent(_ref) {
  var children = _ref.children,
      sides = _ref.sides,
      color = _ref.color,
      size = _ref.size;


  var borderSize = size ? size + "px" : "2px";
  var border = void 0;

  if (sides) {
    border = sides.split(" ").reduce(function (acc, current) {
      acc += current === "true" ? " " + borderSize : " 0";

      return acc;
    }, "");
  } else {
    border = "0 0 0 " + borderSize;
  }

  return React__default.createElement(
    Container$2,
    { className: "" + (color ? "bc-" + color : "bc-primary"), border: border },
    children
  );
};

BorderContent.propTypes = {
  children: PropTypes.node.isRequired,
  borderSides: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string
};

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      _ref$outline = _ref.outline,
      outline = _ref$outline === undefined ? false : _ref$outline;
  return React__default.createElement(
    "button",
    { type: "button", className: "btn " + (outline ? "btn-" + color + "-outline" : "btn-" + color) },
    children
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool
};

var _templateObject$5 = taggedTemplateLiteral(["\n  border-radius: 10px;\n"], ["\n  border-radius: 10px;\n"]);

var Container$3 = styled.div(_templateObject$5);

var Card = function Card(_ref) {
  var children = _ref.children;
  return React__default.createElement(
    Container$3,
    { className: "bg-white box-shadow" },
    children
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$6 = taggedTemplateLiteral(["\n  text-align: center;\n  padding: 45px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n"], ["\n  text-align: center;\n  padding: 45px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n"]);

var Container$4 = styled.div(_templateObject$6);

var CardContent = function CardContent(_ref) {
  var children = _ref.children;
  return React__default.createElement(
    Container$4,
    null,
    children
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$7 = taggedTemplateLiteral(["\n  padding: 15px 32px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n\n  * { margin-bottom: 0; }\n"], ["\n  padding: 15px 32px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n\n  * { margin-bottom: 0; }\n"]);

var Container$5 = styled.div(_templateObject$7);

var CardHeader = function CardHeader(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return React__default.createElement(
    Container$5,
    { className: "text-white " + (color ? "bg-" + color : "bg-primary") },
    children
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

var _templateObject$8 = taggedTemplateLiteral(["\n  padding-left: 25px;\n"], ["\n  padding-left: 25px;\n"]);

var StyledInput = styled.input(_templateObject$8);

var Input = function Input(_ref) {
  var type = _ref.type,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? "" : _ref$placeholder;
  return React__default.createElement(StyledInput, { className: "bw-s-1 bc-muted", type: type, placeholder: placeholder });
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

var _templateObject$9 = taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  margin: 5px;\n\n  button {\n    position: relative;\n    flex: 1 1 auto;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n  }\n\n  > :first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n\n  > :last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n"], ["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  margin: 5px;\n\n  button {\n    position: relative;\n    flex: 1 1 auto;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n  }\n\n  > :first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n\n  > :last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n"]);

var Container$6 = styled.div(_templateObject$9);

var InputGroup = function InputGroup(_ref) {
  var children = _ref.children;
  return React__default.createElement(
    Container$6,
    null,
    children
  );
};

InputGroup.propTypes = {
  children: PropTypes.node.isRequired
};

// Global Theme && Breakpoints

exports.Breakpoints = Breakpoints_1;
exports.ReactCuttlefishTheme = ReactCuttlefishTheme;
exports.Columns = Columns;
exports.Section = Section;
exports.Accordion = Accordion;
exports.BorderContent = BorderContent;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardHeader = CardHeader;
exports.Input = Input;
exports.InputGroup = InputGroup;
//# sourceMappingURL=index.js.map
