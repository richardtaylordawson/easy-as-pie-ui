import React, { Component } from "react"
import { Router } from "@reach/router"

import MainLayout from "./layouts/MainLayout"

// Main Page
import Home from "./pages/Index"

// Getting Started Page
import GettingStarted from "./pages/GettingStarted"

// Position Pages
import ColumnsPage from "./pages/components/ColumnsPage"
import SectionPage from "./pages/components/SectionPage"

// Components Pages
import AccordionPage from "./pages/components/AccordionPage"
import BorderContentPage from "./pages/components/BorderContentPage"
import ButtonsPage from "./pages/components/ButtonsPage"
import CardPage from "./pages/components/CardPage"
import InputPage from "./pages/components/InputPage"
import NavbarPage from "./pages/components/NavbarPage"

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Router>
          <Home path={process.env.PUBLIC_URL + '/'} />

          <GettingStarted path={process.env.PUBLIC_URL + '/getting-started'} />

          <ColumnsPage path={process.env.PUBLIC_URL + '/components/columns'} />
          <SectionPage path={process.env.PUBLIC_URL + '/components/section'} />

          <AccordionPage path={process.env.PUBLIC_URL + '/components/accordion'} />
          <BorderContentPage path={process.env.PUBLIC_URL + '/components/border-content'} />
          <ButtonsPage path={process.env.PUBLIC_URL + '/components/buttons'} />
          <CardPage path={process.env.PUBLIC_URL + '/components/card'} />
          <InputPage path={process.env.PUBLIC_URL + '/components/input'} />
          <NavbarPage path={process.env.PUBLIC_URL + '/components/navbar'} />
        </Router>
      </MainLayout>
    )
  }
}

export default App;
