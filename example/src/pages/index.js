import React from "react"
import { Link } from "@reach/router"
import { Section } from "react-cuttlefish"

const Home  = () => (
  <Section>
    <div className="center-block text-center mb-xl">
      <h1 className="mb-sm text-danger">reactCuttleFish</h1>
      <h6 className="mb-md">Collection of generic components <br/>that can be used to easily build a website.</h6>
      <a className="btn bg-white bc-danger bw-s-1 text-danger" href="https://github.com/richardtaylordawson/react-cuttlefish" target="blank">Github</a>
      <Link to="/components" className="btn bg-danger text-white">Components</Link>
    </div>
    <div className="content-sm center-block mb-xl">
      <h4 className="text-primary">Installation</h4>
      <hr/>
      <h5 className="mt-md">NPM</h5>
      <p>Install reactCuttleFish and peer dependencies via NPM</p>
      <code><span className="text-warning">npm install</span> --save react-cuttlefish</code>
    </div>
    <div className="content-sm center-block">
      <h4 className="text-primary">About the Project</h4>
      <hr/>
      <h5 className="mt-md">Intro</h5>
      <p>reactCuttleFish was built with ease in mind to help anyone get started quick and easily with any site. This library contains many UI and positioning components that are friendly and easy to use.</p>
      <p>There are a few core concepts to understand in order to make the most out of this library.</p>
      <ol>
        <li>Your content is expected to be composed via props.children rather than using named props to pass in Components</li>
        <li>Certain attributes can be passed in to change the look, apply modifier classes, enable different functionality, etc. All of these are defined in the components section</li>
      </ol>
      <p>Examples:</p>
      <ul>
        <li><span class="text-danger bg-light">color</span> - applies color to <span class="text-danger bg-light">Sections</span>, <span class="text-danger bg-light">Buttons</span>, etc.</li>
      </ul>
    </div>
  </Section>
)

export default Home
