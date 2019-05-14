const Breakpoints = {
  "small": [0, 640],
  "small-up": [0],
  "small-down": [640],
  "medium": [641, 1024],
  "medium-up": [641],
  "medium-down": [1024],
  "large": [1025, 1440],
  "large-up": [1025]
}

Object.keys(Breakpoints).map(key => {
  return Breakpoints[key] = Breakpoints[key].length !== 2
    ? key.includes("up")
    ? `@media screen and (min-width: ${Breakpoints[key][0]}px)`
    : `@media screen and (max-width: ${Breakpoints[key][0]}px)`
    : `@media screen and (min-width: ${Breakpoints[key][0]}px) and (max-width: ${Breakpoints[key][1]}px)`
})

module.exports = Breakpoints
