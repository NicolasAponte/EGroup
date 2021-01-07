import React, { Component } from 'react';
import Encabezado from './Encabezado';
import Pie from './PiedePagina';
import Home from './Home';
import Menu from './Menu';
import Nosotros from './Nosotros';
import Contactanos from './Contactanos';
import { Switch, Redirect, Route, withRouter } from "react-router-dom";

import { PLATOS } from "../shared/platos";
import { EQUIPO } from "../shared/equipo";
import { BEBIDAS  } from "../shared/bebidas";


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            platos: PLATOS,
            equipo: EQUIPO,
            bebidas: BEBIDAS
        }
    }

    render() {
        return(
            <div>
                <Encabezado />
                <Switch>
                    <Route path="/home" component={() => <Home />}/>
                    <Route path="/menu" component={() => <Menu platos={this.state.platos} bebidas={this.state.bebidas}/>}/>
                    <Route path="/nosotros" component={() => <Nosotros equipo={this.state.equipo}/>}/>
                    <Route path="/contactanos" component={() => <Contactanos />}/>
                    <Redirect to="/home"/>
                </Switch>
                <Pie />
            </div>
        );
    }
}

export default withRouter(Main);
