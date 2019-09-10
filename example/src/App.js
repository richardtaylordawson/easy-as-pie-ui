import React from "react"
import { Router } from "@reach/router"
import { MainLayout } from "./layouts/MainLayout"
import { Index } from "./pages/Index"
import { ColumnsPage } from "./pages/components/ColumnsPage"
import { SectionPage } from "./pages/components/SectionPage"
import { AccordionPage } from "./pages/components/AccordionPage"
import { BorderContentPage } from "./pages/components/BorderContentPage"
import { ButtonPage } from "./pages/components/ButtonPage"
import { CardPage } from "./pages/components/CardPage"

export const App  = () => (
  <MainLayout>
    <Router>
      <Index path={process.env.PUBLIC_URL + '/'} />

      <ColumnsPage path={process.env.PUBLIC_URL + '/components/columns'} />
      <SectionPage path={process.env.PUBLIC_URL + '/components/section'} />

      <AccordionPage path={process.env.PUBLIC_URL + '/components/accordion'} />
      <BorderContentPage path={process.env.PUBLIC_URL + '/components/border-content'} />
      <ButtonPage path={process.env.PUBLIC_URL + '/components/button'} />
      <CardPage path={process.env.PUBLIC_URL + '/components/card'} />
    </Router>
  </MainLayout>
)
