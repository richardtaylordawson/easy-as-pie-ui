import React from "react"
import { Section, Button } from "easy-as-pie-ui"

const Home  = () => (
  <Section>
    <div className="center-block text-center mb-xl mt-xl">
      <h1 className="mb-sm text-blue">Easy as Pie UI</h1>
      <h6 className="mb-md">React component library that is easy as pie<br/> to theme and implement on any site.</h6>
      <Button color="blue-outline" href="https://github.com/richardtaylordawson/easy-as-pie-ui" target="_blank">Github</Button>
      <Button color="blue" href="/components/button">Components</Button>
    </div>
    <div className="content-sm center-block mb-xl">
      <h4 className="text-red">Installation</h4>
      <hr/>
      <h5 className="mt-md">NPM</h5>
      <p>Install Easy as Pie UI and peer dependencies via NPM</p>
      <code><span className="text-yellow">npm install</span> --save easy-as-pie-ui</code>
    </div>
  </Section>
)

export default Home
