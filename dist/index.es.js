import React, { Component } from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

var Breakpoints = {
  "small": [0, 576],
  "small-up": [0],
  "small-down": [576],
  "medium": [768, 992],
  "medium-up": [768],
  "medium-down": [991],
  "large": [992, 1200],
  "large-up": [992]
};

Object.keys(Breakpoints).map(function (key) {
  return Breakpoints[key] = Breakpoints[key].length !== 2 ? key.includes("up") ? "@media screen and (min-width: " + Breakpoints[key][0] + "px)" : "@media screen and (max-width: " + Breakpoints[key][0] + "px)" : "@media screen and (min-width: " + Breakpoints[key][0] + "px) and (max-width: " + Breakpoints[key][1] + "px)";
});

var Colors = {
  "red": "#DB2828",
  "orange": "#F2711C",
  "yellow": "#FBBD08",
  "olive": "#B5CC18",
  "green": "#21BA45",
  "teal": "#00B5AD",
  "blue": "#2185D0",
  "violet": "#6435C9",
  "purple": "#A333C8",
  "pink": "#E03997",
  "brown": "#A5673F",
  "grey": "#767676",
  "light-grey": "#bbb",
  "black": "#1B1C1D"
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var rgbToHsl = createCommonjsModule(function (module) {
(function() {
  module.exports = function(r, g, b) {
    var d, h, l, max, min, s;
    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = 0;
    s = 0;
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h /= 6;
    }
    h = Math.ceil(h * 360);
    s = (Math.ceil(s * 100)) + "%";
    l = (Math.ceil(l * 100)) + "%";
    return [h, s, l];
  };

}).call(commonjsGlobal);
});

var hexToRgb = function hexToRgb (hex) {

  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex);
  }

  if (hex.length === 3) {
    hex = expand(hex);
  }

  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b]
};

function removeHash (hex) {

  var arr = hex.split('');
  arr.shift();
  return arr.join('')
}

function expand (hex) {

  return hex
    .split('')
    .reduce(function (accum, value) {

      return accum.concat([value, value])
    }, [])
    .join('')
}

var hexToHsl = function (hex) {
	var hsl = rgbToHsl.apply(rgbToHsl, hexToRgb(hex));
	return [hsl[0], parseInt(hsl[1], 10), parseInt(hsl[2], 10)];
};

const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

var hexRgb = (hex, options = {}) => {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alpha = 1;

	if (hex.length === 8) {
		alpha = parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const num = parseInt(hex, 16);
	const red = num >> 16;
	const green = (num >> 8) & 255;
	const blue = num & 255;

	return options.format === 'array' ?
		[red, green, blue, alpha] :
		{red, green, blue, alpha};
};

var Spacing = {
  "xs": "0",
  "sm": "15px",
  "md": "30px",
  "lg": "45px",
  "xl": "60px"
};

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

var _templateObject = taggedTemplateLiteral(["\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        html {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: #000;\n        }\n\n        article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n          display: block;\n        }\n\n        body {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n          font-size: 1rem;\n          font-weight: 400;\n          line-height: 1.5;\n          color: #212529;\n          text-align: left;\n          background-color: #FFF;\n        }\n\n        [tabindex=\"-1\"]:focus {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 10;\n          overflow: visible;\n          border: 0.5px solid #ccc;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-top: 0;\n          margin-bottom: 0.5rem;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 1rem;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        blockquote {\n          margin: 0 0 1rem;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -.25em;\n        }\n\n        sup {\n          top: -.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n\n          &.btn:hover {\n            text-decoration: none;\n          }\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n\n        a:not([href]):not([tabindex]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):focus {\n          outline: 0;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n          font-size: 1em;\n          background-color: #323a3f;\n          color: #FFF;\n          padding: 15px;\n          width: 100%;\n          display: block;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 1rem;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 1rem;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 0.75rem;\n          padding-bottom: 0.75rem;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 0.5rem;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type=\"button\"],\n        [type=\"reset\"],\n        [type=\"submit\"] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type=\"button\"]:not(:disabled),\n        [type=\"reset\"]:not(:disabled),\n        [type=\"submit\"]:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type=\"button\"]::-moz-focus-inner,\n        [type=\"reset\"]::-moz-focus-inner,\n        [type=\"submit\"]::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type=\"radio\"],\n        input[type=\"checkbox\"] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type=\"date\"],\n        input[type=\"time\"],\n        input[type=\"datetime-local\"],\n        input[type=\"month\"] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: .5rem;\n          font-size: 1.5rem;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type=\"number\"]::-webkit-inner-spin-button,\n        [type=\"number\"]::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type=\"search\"] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type=\"search\"]::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-bottom: 0.5rem;\n          font-weight: 500;\n          line-height: 1.2;\n        }\n\n        h1 { font-size: 3rem; }\n        h2 { font-size: 2rem; }\n        h3 { font-size: 1.75rem; }\n        h4 { font-size: 1.5rem; }\n        h5 { font-size: 1.25rem; }\n        h6 { font-size: 1rem; }\n\n        /* Start of Helper Classes */\n        /*********************************************************/\n\n        /* Text Alignment */\n        .text-center { text-align: center; }\n        .text-left { text-align: left; }\n        .text-right { text-align: right; }\n\n        /* Text Sizing */\n        .text-small { font-size: 10px; }\n\n        /* Font Styling */\n        .bold { font-style: bold; }\n        .italic { font-style: italic; }\n\n        ", " {\n          .text-sm-center { text-align: center; }\n          .text-sm-left { text-align: left; }\n          .text-sm-right { text-align: right; }\n        }\n\n        ", " {\n          .text-md-center { text-align: center; }\n          .text-md-left { text-align: left; }\n          .text-md-right { text-align: right; }\n        }\n\n        ", " {\n          .text-lg-center { text-align: center; }\n          .text-lg-left { text-align: left; }\n          .text-lg-right { text-align: right; }\n        }\n\n        /* Float */\n        .pull-left { float: left; }\n        .pull-right { float: right; }\n\n        /* Center Block */\n        .center-block {\n          display: block;\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .center-block-lg {\n          ", " {\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n          }\n        }\n\n        .img-responsive {\n          max-width: 100%;\n          height: auto;\n          width: 50%;\n\n          ", " {\n            width: 100%;\n          }\n        }\n\n        /* Box Shadows */\n        .box-shadow { box-shadow: 0 1px 3px ", "; }\n\n        /* Notch for Sections */\n        .notch { position: relative; }\n        .notch:before {\n          content: \" \";\n          left: 50%;\n          width: 30px;\n          height: 30px;\n          margin-left: -15px;\n          position: absolute;\n          transform: rotate(45deg);\n        }\n\n        /* Notch Position */\n        .notch-bottom:before { top: 100%; margin-top: -15px; }\n        .notch-top:before { bottom: 100%; margin-bottom: -15px; }\n\n        /* Content Sizes */\n        .content-xs { max-width: 522px; }\n        .content-sm { max-width: 658px; }\n        .content-md { max-width: 890px; }\n        .content-lg { max-width: 1032px; }\n\n        /* Display */\n        .show { display: block; }\n        .hidden { display: none; }\n        .invisible { visibility: hidden; }\n        .inline { display: inline; }\n\n        .d-none-md-down {\n          ", " {\n            display: none;\n          }\n        }\n\n        .d-none-lg-up {\n          ", " {\n            display: none;\n          }\n        }\n\n        .btn {\n          cursor: pointer;\n          border-radius: 5px;\n          padding: 10px 47.5px;\n          text-align: center;\n          text-decoration: none;\n          display: inline-block;\n          margin: 0 10px 10px 0;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n        }\n\n        ", "\n\n        .text-white { color: #fff; }\n\n        .stronger {\n          font-weight: 800;\n        }\n\n        /* Border Width */\n        .bw-s-1 {\n          border-width: 1px;\n          border-style: solid;\n        }\n\n        .bw-s-2 {\n          border-width: 2px;\n          border-style: solid;\n        }\n\n        .bw-s-3 {\n          border-width: 3px;\n          border-style: solid;\n        }\n\n        .bw-none { border: none; }\n\n        /* Padding */\n        .pb-xs { padding-bottom: ", "; }\n        .pb-sm { padding-bottom: ", "; }\n        .pb-md { padding-bottom: ", "; }\n        .pb-lg { padding-bottom: ", "; }\n        .pb-xl { padding-bottom: ", "; }\n        .pr-xs { padding-right: ", "; }\n        .pr-sm { padding-right: ", "; }\n        .pr-md { padding-right: ", "; }\n        .pr-lg { padding-right: ", "; }\n        .pr-xl { padding-right: ", "; }\n        .pl-xs { padding-left: ", "; }\n        .pl-sm { padding-left: ", "; }\n        .pl-md { padding-left: ", "; }\n        .pl-lg { padding-left: ", "; }\n        .pl-xl { padding-left: ", "; }\n        .pt-xs { padding-top: ", "; }\n        .pt-sm { padding-top: ", "; }\n        .pt-md { padding-top: ", "; }\n        .pt-lg { padding-top: ", "; }\n        .pt-xl { padding-top: ", "; }\n\n        /* Margin */\n        .mb-xs { margin-bottom: ", "; }\n        .mb-sm { margin-bottom: ", "; }\n        .mb-md { margin-bottom: ", "; }\n        .mb-lg { margin-bottom: ", "; }\n        .mb-xl { margin-bottom: ", "; }\n        .mr-xs { margin-right: ", "; }\n        .mr-sm { margin-right: ", "; }\n        .mr-md { margin-right: ", "; }\n        .mr-lg { margin-right: ", "; }\n        .mr-xl { margin-right: ", "; }\n        .ml-xs { margin-left: ", "; }\n        .ml-sm { margin-left: ", "; }\n        .ml-md { margin-left: ", "; }\n        .ml-lg { margin-left: ", "; }\n        .ml-xl { margin-left: ", "; }\n        .mt-xs { margin-top: ", "; }\n        .mt-sm { margin-top: ", "; }\n        .mt-md { margin-top: ", "; }\n        .mt-lg { margin-top: ", "; }\n        .mt-xl { margin-top: ", "; }\n      "], ["\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        html {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: #000;\n        }\n\n        article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n          display: block;\n        }\n\n        body {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n          font-size: 1rem;\n          font-weight: 400;\n          line-height: 1.5;\n          color: #212529;\n          text-align: left;\n          background-color: #FFF;\n        }\n\n        [tabindex=\"-1\"]:focus {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 10;\n          overflow: visible;\n          border: 0.5px solid #ccc;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-top: 0;\n          margin-bottom: 0.5rem;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 1rem;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 1rem;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        blockquote {\n          margin: 0 0 1rem;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -.25em;\n        }\n\n        sup {\n          top: -.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n\n          &.btn:hover {\n            text-decoration: none;\n          }\n        }\n\n        a:hover {\n          text-decoration: underline;\n        }\n\n        a:not([href]):not([tabindex]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):not([tabindex]):focus {\n          outline: 0;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n          font-size: 1em;\n          background-color: #323a3f;\n          color: #FFF;\n          padding: 15px;\n          width: 100%;\n          display: block;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 1rem;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 1rem;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 0.75rem;\n          padding-bottom: 0.75rem;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 0.5rem;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type=\"button\"],\n        [type=\"reset\"],\n        [type=\"submit\"] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type=\"button\"]:not(:disabled),\n        [type=\"reset\"]:not(:disabled),\n        [type=\"submit\"]:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type=\"button\"]::-moz-focus-inner,\n        [type=\"reset\"]::-moz-focus-inner,\n        [type=\"submit\"]::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type=\"radio\"],\n        input[type=\"checkbox\"] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type=\"date\"],\n        input[type=\"time\"],\n        input[type=\"datetime-local\"],\n        input[type=\"month\"] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: .5rem;\n          font-size: 1.5rem;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type=\"number\"]::-webkit-inner-spin-button,\n        [type=\"number\"]::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type=\"search\"] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type=\"search\"]::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n          margin-bottom: 0.5rem;\n          font-weight: 500;\n          line-height: 1.2;\n        }\n\n        h1 { font-size: 3rem; }\n        h2 { font-size: 2rem; }\n        h3 { font-size: 1.75rem; }\n        h4 { font-size: 1.5rem; }\n        h5 { font-size: 1.25rem; }\n        h6 { font-size: 1rem; }\n\n        /* Start of Helper Classes */\n        /*********************************************************/\n\n        /* Text Alignment */\n        .text-center { text-align: center; }\n        .text-left { text-align: left; }\n        .text-right { text-align: right; }\n\n        /* Text Sizing */\n        .text-small { font-size: 10px; }\n\n        /* Font Styling */\n        .bold { font-style: bold; }\n        .italic { font-style: italic; }\n\n        ", " {\n          .text-sm-center { text-align: center; }\n          .text-sm-left { text-align: left; }\n          .text-sm-right { text-align: right; }\n        }\n\n        ", " {\n          .text-md-center { text-align: center; }\n          .text-md-left { text-align: left; }\n          .text-md-right { text-align: right; }\n        }\n\n        ", " {\n          .text-lg-center { text-align: center; }\n          .text-lg-left { text-align: left; }\n          .text-lg-right { text-align: right; }\n        }\n\n        /* Float */\n        .pull-left { float: left; }\n        .pull-right { float: right; }\n\n        /* Center Block */\n        .center-block {\n          display: block;\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .center-block-lg {\n          ", " {\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n          }\n        }\n\n        .img-responsive {\n          max-width: 100%;\n          height: auto;\n          width: 50%;\n\n          ", " {\n            width: 100%;\n          }\n        }\n\n        /* Box Shadows */\n        .box-shadow { box-shadow: 0 1px 3px ", "; }\n\n        /* Notch for Sections */\n        .notch { position: relative; }\n        .notch:before {\n          content: \" \";\n          left: 50%;\n          width: 30px;\n          height: 30px;\n          margin-left: -15px;\n          position: absolute;\n          transform: rotate(45deg);\n        }\n\n        /* Notch Position */\n        .notch-bottom:before { top: 100%; margin-top: -15px; }\n        .notch-top:before { bottom: 100%; margin-bottom: -15px; }\n\n        /* Content Sizes */\n        .content-xs { max-width: 522px; }\n        .content-sm { max-width: 658px; }\n        .content-md { max-width: 890px; }\n        .content-lg { max-width: 1032px; }\n\n        /* Display */\n        .show { display: block; }\n        .hidden { display: none; }\n        .invisible { visibility: hidden; }\n        .inline { display: inline; }\n\n        .d-none-md-down {\n          ", " {\n            display: none;\n          }\n        }\n\n        .d-none-lg-up {\n          ", " {\n            display: none;\n          }\n        }\n\n        .btn {\n          cursor: pointer;\n          border-radius: 5px;\n          padding: 10px 47.5px;\n          text-align: center;\n          text-decoration: none;\n          display: inline-block;\n          margin: 0 10px 10px 0;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n        }\n\n        ", "\n\n        .text-white { color: #fff; }\n\n        .stronger {\n          font-weight: 800;\n        }\n\n        /* Border Width */\n        .bw-s-1 {\n          border-width: 1px;\n          border-style: solid;\n        }\n\n        .bw-s-2 {\n          border-width: 2px;\n          border-style: solid;\n        }\n\n        .bw-s-3 {\n          border-width: 3px;\n          border-style: solid;\n        }\n\n        .bw-none { border: none; }\n\n        /* Padding */\n        .pb-xs { padding-bottom: ", "; }\n        .pb-sm { padding-bottom: ", "; }\n        .pb-md { padding-bottom: ", "; }\n        .pb-lg { padding-bottom: ", "; }\n        .pb-xl { padding-bottom: ", "; }\n        .pr-xs { padding-right: ", "; }\n        .pr-sm { padding-right: ", "; }\n        .pr-md { padding-right: ", "; }\n        .pr-lg { padding-right: ", "; }\n        .pr-xl { padding-right: ", "; }\n        .pl-xs { padding-left: ", "; }\n        .pl-sm { padding-left: ", "; }\n        .pl-md { padding-left: ", "; }\n        .pl-lg { padding-left: ", "; }\n        .pl-xl { padding-left: ", "; }\n        .pt-xs { padding-top: ", "; }\n        .pt-sm { padding-top: ", "; }\n        .pt-md { padding-top: ", "; }\n        .pt-lg { padding-top: ", "; }\n        .pt-xl { padding-top: ", "; }\n\n        /* Margin */\n        .mb-xs { margin-bottom: ", "; }\n        .mb-sm { margin-bottom: ", "; }\n        .mb-md { margin-bottom: ", "; }\n        .mb-lg { margin-bottom: ", "; }\n        .mb-xl { margin-bottom: ", "; }\n        .mr-xs { margin-right: ", "; }\n        .mr-sm { margin-right: ", "; }\n        .mr-md { margin-right: ", "; }\n        .mr-lg { margin-right: ", "; }\n        .mr-xl { margin-right: ", "; }\n        .ml-xs { margin-left: ", "; }\n        .ml-sm { margin-left: ", "; }\n        .ml-md { margin-left: ", "; }\n        .ml-lg { margin-left: ", "; }\n        .ml-xl { margin-left: ", "; }\n        .mt-xs { margin-top: ", "; }\n        .mt-sm { margin-top: ", "; }\n        .mt-md { margin-top: ", "; }\n        .mt-lg { margin-top: ", "; }\n        .mt-xl { margin-top: ", "; }\n      "]);

var EasyAsPieUITheme = function EasyAsPieUITheme(_ref) {
  var _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? {} : _ref$colors,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === undefined ? {} : _ref$spacing;

  Object.keys(Colors).map(function (key) {
    return Colors[key] = colors.hasOwnProperty(key) ? colors[key] : Colors[key];
  });
  Object.keys(Spacing).map(function (key) {
    return Spacing[key] = spacing.hasOwnProperty(key) ? spacing[key] : Spacing[key];
  });

  return React.createElement(Global, {
    styles: css(_templateObject, Breakpoints["small-up"], Breakpoints["medium-up"], Breakpoints["large-up"], Breakpoints["large-up"], Breakpoints["large-up"], Colors.black, Breakpoints["medium-down"], Breakpoints["large-up"], Object.keys(Colors).map(function (key) {
      var currentHSL = hexToHsl(Colors[key]);
      var currentRGB = hexRgb(Colors[key]);

      // Darken or lighten hover color depending on original color
      currentHSL[2] *= currentHSL[2] * .8 < 10 ? 1.8 : .8;

      return "\n            .btn-" + key + " {\n              color: #FFF;\n              background-color: " + Colors[key] + ";\n              border: 1px solid " + Colors[key] + ";\n\n              &:hover {\n                background-color: hsl(" + currentHSL[0] + ", " + currentHSL[1] + "%, " + currentHSL[2] + "%);\n                border-color: 1px solid hsl(" + currentHSL[0] + ", " + currentHSL[1] + "%, " + currentHSL[2] + "%);\n                transition: all 0.3s;\n              }\n            }\n\n            .btn-" + key + "-outline {\n              color: " + Colors[key] + ";\n              border: 1px solid " + Colors[key] + ";\n              background-color: transparent;\n              background-image: none;\n\n              &:hover {\n                background-color: " + Colors[key] + ";\n                color: #FFF;\n                transition: all 0.3s;\n              }\n            }\n\n            .btn-" + key + ":focus,\n            .btn-" + key + "-outline:focus {\n              outline: 0;\n              box-shadow: 0 0 0 0.2rem rgba(" + currentRGB.red + ", " + currentRGB.green + ", " + currentRGB.blue + ", 0.50);\n            }\n\n            .text-" + key + " { color: " + Colors[key] + "; }\n            .bg-" + key + " { background-color: " + Colors[key] + "; }\n            .bc-" + key + " { border-color: " + Colors[key] + "; }\n            .notch-" + key + ":before { background-color: " + Colors[key] + "; }\n          ";
    }), Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl, Spacing.xs, Spacing.sm, Spacing.md, Spacing.lg, Spacing.xl)
  });
};

var _templateObject$1 = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  ", " { flex-direction: column; }\n"], ["\n  display: flex;\n  flex-direction: row;\n\n  ", " { flex-direction: column; }\n"]),
    _templateObject2 = taggedTemplateLiteral(["\n  width: ", "%;\n  margin: ", ";\n\n  ", " {\n    margin: 10px 0;\n    width: 100%;\n  }\n"], ["\n  width: ", "%;\n  margin: ", ";\n\n  ", " {\n    margin: 10px 0;\n    width: 100%;\n  }\n"]);

var Columns = function Columns(_ref) {
  var children = _ref.children,
      collapseMargin = _ref.collapseMargin,
      split = _ref.split;
  return React.createElement(
    FlexContainer,
    null,
    children.map(function (child, index, children) {
      return React.createElement(
        Column,
        { key: index, columnWidth: split ? split[index] : 100 / children.length, collapseMargin: collapseMargin },
        child
      );
    })
  );
};

var FlexContainer = styled.div(_templateObject$1, Breakpoints["medium-down"]);

var Column = styled.div(_templateObject2, function (props) {
  return props.columnWidth;
}, function (props) {
  return props.collapseMargin ? "0" : "30px";
}, Breakpoints["medium-down"]);

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool,
  split: PropTypes.array
};

var _templateObject$2 = taggedTemplateLiteral(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"]);

var Section = function Section(_ref) {
  var children = _ref.children,
      color = _ref.color,
      image = _ref.image,
      imagePosition = _ref.imagePosition,
      _ref$padding = _ref.padding,
      padding = _ref$padding === undefined ? "" : _ref$padding,
      _ref$notch = _ref.notch,
      notch = _ref$notch === undefined ? "" : _ref$notch;

  padding = padding !== "" ? "pt-" + padding + " pb-" + padding : "pt-xl pb-xl";

  if (notch !== "") {
    notch = notch.split(" ");
    notch = notch && "notch notch-" + notch[0] + " notch-" + notch[1];
  }

  return React.createElement(
    Container,
    { className: "pl-md pr-md " + notch + " " + padding + " " + (color ? "bg-" + color : "bg-white"), image: image, imagePosition: imagePosition },
    React.createElement(
      "div",
      { className: "center-block content-lg" },
      children
    )
  );
};

var Container = styled.section(_templateObject$2, function (props) {
  return props.image && "background-image: url(" + props.image + "); background-size: cover;";
}, function (props) {
  return props.image ? props.imagePosition ? "background-position: " + props.imagePosition + ";" : "background-position: center;" : "";
});

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.string,
  notch: PropTypes.string
};

var _templateObject$3 = taggedTemplateLiteral(["\n  max-width: 658px;\n  margin: 20px auto;\n\n  &.open {\n    .accordion-header:before { content: \"-\"; }\n    .accordion-content { display: block; }\n  }\n\n  .accordion-header:before {\n    content: \"+\";\n    position: absolute;\n    color: white;\n    right: 15px;\n    top: -21px;\n    font-size: 50px;\n  }\n\n  .accordion-content { display: none; }\n"], ["\n  max-width: 658px;\n  margin: 20px auto;\n\n  &.open {\n    .accordion-header:before { content: \"-\"; }\n    .accordion-content { display: block; }\n  }\n\n  .accordion-header:before {\n    content: \"+\";\n    position: absolute;\n    color: white;\n    right: 15px;\n    top: -21px;\n    font-size: 50px;\n  }\n\n  .accordion-content { display: none; }\n"]),
    _templateObject2$1 = taggedTemplateLiteral(["\n  padding: 10px 50px 10px 23px;\n  cursor: pointer;\n  position: relative;\n\n  * { margin-bottom: 0; }\n"], ["\n  padding: 10px 50px 10px 23px;\n  cursor: pointer;\n  position: relative;\n\n  * { margin-bottom: 0; }\n"]),
    _templateObject3 = taggedTemplateLiteral(["\n  padding: 30px 55px;\n  background-color: #eee;\n"], ["\n  padding: 30px 55px;\n  background-color: #eee;\n"]);

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
      return React.createElement(
        Container$1,
        { className: "bg-grey " + (this.state.open && "open") },
        React.createElement(
          Header,
          { className: "accordion-header " + (this.props.color ? "bg-" + this.props.color + " text-white" : "bg-blue text-white"), onClick: this.toggle.bind(this) },
          this.props.children[0]
        ),
        React.createElement(
          Content,
          { className: "accordion-content" },
          this.props.children[1]
        )
      );
    }
  }]);
  return Accordion;
}(Component);

var Container$1 = styled.div(_templateObject$3);

var Header = styled.div(_templateObject2$1);

var Content = styled.div(_templateObject3);

Accordion.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$4 = taggedTemplateLiteral(["\n  padding: 15px;\n  border-style: solid;\n  border-width: ", ";\n"], ["\n  padding: 15px;\n  border-style: solid;\n  border-width: ", ";\n"]);

var BorderContent = function BorderContent(_ref) {
  var children = _ref.children,
      sides = _ref.sides,
      color = _ref.color,
      size = _ref.size;

  var borderSize = size ? "" + size : "2px";
  var border = void 0;

  if (sides) {
    border = sides.split(" ").reduce(function (acc, current) {
      acc += current === "true" ? " " + borderSize : " 0";

      return acc;
    }, "");
  } else {
    border = "0 0 0 " + borderSize;
  }

  return React.createElement(
    Container$2,
    { className: "" + (color ? "bc-" + color : "bc-blue"), border: border },
    children
  );
};

var Container$2 = styled.div(_templateObject$4, function (props) {
  return props.border;
});

BorderContent.propTypes = {
  children: PropTypes.node.isRequired,
  sides: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "" : _ref$color,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? "" : _ref$href,
      _ref$target = _ref.target,
      target = _ref$target === undefined ? "" : _ref$target;

  var buttonClasses = "btn btn-" + color;

  return href ? React.createElement(
    "a",
    { href: href, target: target ? target : "", className: buttonClasses },
    children
  ) : React.createElement(
    "button",
    { type: "button", className: buttonClasses },
    children
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

var _templateObject$5 = taggedTemplateLiteral(["\n  border-radius: 10px;\n"], ["\n  border-radius: 10px;\n"]);

var Card = function Card(_ref) {
  var children = _ref.children;
  return React.createElement(
    Container$3,
    { className: "bg-white box-shadow" },
    children
  );
};

var Container$3 = styled.div(_templateObject$5);

Card.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$6 = taggedTemplateLiteral(["\n  text-align: center;\n  padding: 45px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n"], ["\n  text-align: center;\n  padding: 45px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n"]);

var CardContent = function CardContent(_ref) {
  var children = _ref.children;
  return React.createElement(
    Container$4,
    null,
    children
  );
};

var Container$4 = styled.div(_templateObject$6);

CardContent.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$7 = taggedTemplateLiteral(["\n  padding: 15px 32px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n\n  * { margin-bottom: 0; }\n"], ["\n  padding: 15px 32px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n\n  * { margin-bottom: 0; }\n"]);

var CardHeader = function CardHeader(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return React.createElement(
    Container$5,
    { className: "text-white " + (color ? "bg-" + color : "bg-blue") },
    children
  );
};

var Container$5 = styled.div(_templateObject$7);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

var _templateObject$8 = taggedTemplateLiteral(["\n  padding-left: 25px;\n"], ["\n  padding-left: 25px;\n"]);

var Input = function Input(_ref) {
  var type = _ref.type,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? "" : _ref$placeholder;
  return React.createElement(StyledInput, { className: "bw-s-1 bc-light-grey", type: type, placeholder: placeholder });
};

var StyledInput = styled.input(_templateObject$8);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

var _templateObject$9 = taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  margin: 5px;\n\n  button {\n    position: relative;\n    flex: 1 1 auto;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n  }\n\n  > :first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n\n  > :last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n"], ["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  margin: 5px;\n\n  button {\n    position: relative;\n    flex: 1 1 auto;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n  }\n\n  > :first-child {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n\n  > :last-child {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n"]);

var InputGroup = function InputGroup(_ref) {
  var children = _ref.children;
  return React.createElement(
    Container$6,
    null,
    children
  );
};

var Container$6 = styled.div(_templateObject$9);

InputGroup.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$a = taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"]),
    _templateObject2$2 = taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n"]);

var Container$7 = styled.header(_templateObject$a);

var Constraint = styled.div(_templateObject2$2);

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return React.createElement(
    Container$7,
    { className: color ? "bg-" + color : "bg-grey" },
    React.createElement(
      Constraint,
      null,
      children
    )
  );
};

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

var _templateObject$b = taggedTemplateLiteral(["\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 0;\n    list-style: none;\n  }\n"], ["\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 0;\n    list-style: none;\n  }\n"]);

var Container$8 = styled.nav(_templateObject$b);

var Nav = function Nav(_ref) {
  var children = _ref.children;
  return React.createElement(
    Container$8,
    null,
    React.createElement(
      "ul",
      null,
      children
    )
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired
};

var _templateObject$c = taggedTemplateLiteral(["\n  display: inline;\n  cursor: pointer;\n  margin: 15px;\n  color: ", ";\n\n  a {\n    position: relative;\n    color: inherit;\n    text-decoration: none;\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 50%;\n      bottom: -5px;\n      width: 100%;\n      height: 2px;\n      background-color: #fff;\n      transform-origin: center;\n      transform: translate(-50%, 0) scaleX(0);\n      transition: transform 0.3s ease-in-out;\n    }\n\n    &:hover {\n      color: #fff;\n    }\n\n    &:hover::before {\n      transform: translate(-50%, 0) scaleX(1);\n    }\n  }\n"], ["\n  display: inline;\n  cursor: pointer;\n  margin: 15px;\n  color: ", ";\n\n  a {\n    position: relative;\n    color: inherit;\n    text-decoration: none;\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 50%;\n      bottom: -5px;\n      width: 100%;\n      height: 2px;\n      background-color: #fff;\n      transform-origin: center;\n      transform: translate(-50%, 0) scaleX(0);\n      transition: transform 0.3s ease-in-out;\n    }\n\n    &:hover {\n      color: #fff;\n    }\n\n    &:hover::before {\n      transform: translate(-50%, 0) scaleX(1);\n    }\n  }\n"]);

var Container$9 = styled.li(_templateObject$c, function (props) {
  return props.activeLink ? "#fff" : "rgba(255, 255, 255, 0.8)";
});

var NavLink = function NavLink(_ref) {
  var children = _ref.children,
      active = _ref.active,
      href = _ref.href;
  return React.createElement(
    Container$9,
    { activeLink: active },
    React.createElement(
      "a",
      { href: href },
      children
    )
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string.isRequired
};

var _templateObject$d = taggedTemplateLiteral(["\n  display: inline;\n  cursor: pointer;\n  margin: 15px;\n  color: #fff;\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"], ["\n  display: inline;\n  cursor: pointer;\n  margin: 15px;\n  color: #fff;\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);

var Container$a = styled.div(_templateObject$d);

var NavText = function NavText(_ref) {
  var children = _ref.children,
      href = _ref.href,
      target = _ref.target;
  return React.createElement(
    Container$a,
    null,
    href ? React.createElement(
      "a",
      { href: href, target: target ? target : "" },
      children
    ) : { children: children }
  );
};

NavText.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

var _templateObject$e = taggedTemplateLiteral(["\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid lightgray;\n  font-family: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\n\n  th, td {\n    padding: 12px;\n    border: 1px solid lightgray;\n  }\n\n  th {\n    border-bottom: 2px solid lightgray;\n    background-color: #fff;\n  }\n\n  tr:nth-of-type(odd) {background-color: #f2f2f2;}\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid lightgray;\n  font-family: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\n\n  th, td {\n    padding: 12px;\n    border: 1px solid lightgray;\n  }\n\n  th {\n    border-bottom: 2px solid lightgray;\n    background-color: #fff;\n  }\n\n  tr:nth-of-type(odd) {background-color: #f2f2f2;}\n"]);

var Container$b = styled.table(_templateObject$e);

var Table = function Table(_ref) {
  var children = _ref.children;
  return React.createElement(
    Container$b,
    null,
    children
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired
};

// Global Theme && Breakpoints

export { Breakpoints, Colors, EasyAsPieUITheme, Columns, Section, Accordion, BorderContent, Button, Card, CardContent, CardHeader, Input, InputGroup, Navbar, Nav, NavLink, NavText, Table };
//# sourceMappingURL=index.es.js.map
