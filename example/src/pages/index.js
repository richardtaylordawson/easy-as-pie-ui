import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Section } from "react-cuttlefish"

export default class Home extends Component {
  render() {
    return (
      <div>
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
            <p>reactCuttleFish was built with ease in mind to help anyone get started quick and easily with any site. The package includes many components and classes to help you get off the ground quickly.</p>
          </div>
        </Section>
      </div>
    )
  }
}
