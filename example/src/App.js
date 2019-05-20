import React, { Component } from "react"
import { Router } from "@reach/router"

import MainLayout from "./layouts/MainLayout"

// Main Page
import Home from "./pages/index"

// Position Pages
import ColumnsPage from "./pages/components/ColumnsPage"
import SectionPage from "./pages/components/SectionPage"

// Components Pages
import AccordionPage from "./pages/components/AccordionPage"
import BorderContentPage from "./pages/components/BorderContentPage"
import ButtonsPage from "./pages/components/ButtonsPage"
import CardPage from "./pages/components/CardPage"
import InputPage from "./pages/components/InputPage"

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Router>
          <Home path={process.env.PUBLIC_URL + '/'} />

          <ColumnsPage path={process.env.PUBLIC_URL + '/components/columns'} />
          <SectionPage path={process.env.PUBLIC_URL + '/components/section'} />

          <AccordionPage path={process.env.PUBLIC_URL + '/components/accordion'} />
          <BorderContentPage path={process.env.PUBLIC_URL + '/components/border-content'} />
          <ButtonsPage path={process.env.PUBLIC_URL + '/components/buttons'} />
          <CardPage path={process.env.PUBLIC_URL + '/components/card'} />
          <InputPage path={process.env.PUBLIC_URL + '/components/input'} />
        </Router>
      </MainLayout>
    )
  }
}

export default App;
