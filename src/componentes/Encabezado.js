import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand,NavItem,NavLink, Collapse, Nav, NavbarToggler  } from "reactstrap";


class Encabezado extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nav_Oculto: false
        };

        this.mostrar_Menu = this.mostrar_Menu.bind(this);
    }

    mostrar_Menu () {
        this.setState({
            nav_Oculto: !this.state.nav_Oculto
        });
    }


    render() {
        return(
            <>
                <Navbar dark expand="g" className="pt-0 pb-0 fixed-top">
                    <div style={{"paddingLeft":"10px"}} className=" container">
                        <NavbarBrand className="mr-auto">
                                <div style={{"alignItems":"center"}} className="row">
                                    <div className="pl-0 col-3 col-md-2 d-none d-sm-block">
                                        
                                        <Link to="/home" ><img src="assets/imagenes/logo.png" width="100" height="85" alt="Logo"/></Link>
                                    </div>
                                    <h1 style={{"color":"#fae7e4d5"}} className="col-sm-6 col-12 title-header">
                                        <font face="lorem ipsum">
                                            <strong>Bendita Empanada</strong>
                                        </font>
                                    </h1>
                                    <h6 className="info-header col-2 d-none d-lg-block">
                                        <font face="lorem ipsum">
                                            <strong>
                                                <i className="fa fa-map-marker fa-md"></i> Locales: Cra 8 # 45 - 04<br />
                                                <l style={{"paddingLeft":"90px"}}>Cra 13 # 76 - 28</l><br />
                                                <i className="fa fa-phone fa-md"></i> Tel: 4 98 26 84<br />
                                                <i className="fa fa-whatsapp fa-md"></i> WA: 319 503 23 98
                                            </strong>
                                        </font>
                                    </h6>
                                </div> 
                                <Collapse isOpen={this.state.nav_Oculto} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" href="/home">
                                                <div className="">
                                                <span className="fa fa-cutlery fa-lg"></span>
                                                    <font size="3" face="lorem ipsum"> Inicio</font>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" href="/nosotros">
                                                    <div className="">
                                                        <span className="fa fa-info fa-lg"></span>
                                                        <font size="3" face="lorem ipsum"> Sobre Nosotros</font>
                                                    </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" href="/menu">
                                                <div className="">
                                                    <span className="fa fa-cutlery fa-lg"></span>
                                                    <font size="3" face="lorem ipsum"> Menú</font>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" href="/contactanos">
                                                <div className="">
                                                    <span className="fa fa-envelope fa-lg"></span>
                                                    <font size="3" face="lorem ipsum"> Contáctanos</font>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                        </NavbarBrand>
                        {/* <Nav style={{paddingLeft:"150px"}} className="ml-auto d-none d-lg-block " navbar>
                            <h6 className="info-header">
                                <font face="lorem ipsum">
                                    <strong>
                                        <i className="fa fa-map-marker fa-md"></i> Locales: Cra 8 # 45 - 04<br />
                                        <a style={{"paddingLeft":"75px"}}>Cra 13 # 76 - 28</a><br />
                                        <i className="fa fa-phone fa-md"></i> Tel: 4 98 26 84<br />
                                        <i className="fa fa-whatsapp fa-md"></i> WA: 319 503 23 98
                                    </strong>
                                </font>
                            </h6>
                        </Nav> */}
                        <Nav className="ml-auto mb-0" navbar>
                            <NavbarToggler onClick={this.mostrar_Menu}/>
                        </Nav> 
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Encabezado;