import React, { Component } from 'react';
import Main from './componentes/Main';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Bendita Empanada</title>
              <meta name="description" content="Bendita Empanada" />
          </Helmet>
        <div className="">
            <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
