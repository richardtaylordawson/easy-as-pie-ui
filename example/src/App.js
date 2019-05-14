import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from "./layouts/MainLayout"
import Home from "./pages/index"
import Components from "./pages/components"

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" exposed component={Home} />
            <Route path="/components" exposed component={Components} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;
