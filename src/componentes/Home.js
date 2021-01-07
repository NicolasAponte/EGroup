import React, { Component } from 'react';
import { Jumbotron, Card,CardImg,CardBody,CardTitle,CardSubtitle, Badge, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";


class Home extends Component {

    render() {

        return(
            <div>
                <font face="lorem ipsum">
                <Jumbotron>
                    <div className="container">
                        <div className="align-items-center row">
                            <div className="col-4">
                                <Card inverse>
                                    <CardImg src="assets/imagenes/home.jpg"alt="Home"/>
                                </Card>
                            </div>
                            <div className="col-8 text-home">
                                    <h1 className="title-home"><strong>¡Bienvenido!</strong></h1>
                                    <p className="d-none d-md-block">Bienvenido a "Bendita Empanda", un lugar donde encontrará 
                                    una de las mejores experiencias culinarias de la capital acompañada del mejor servicio al cliente
                                    que puede brindar nuestro personal.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container">
                    <h2 className="text-center text-home"><strong>Conoce Nuestras Promociones</strong></h2>
                    <div className="row justify-content-center">
                        <div className="m-1 col-md-5" >
                            <Card>
                                <CardImg src="assets/imagenes/carne.jpg" alt="Carne"/>
                                <CardImgOverlay>
                                    <h1><Badge color="danger">PROMO</Badge></h1>
                                </CardImgOverlay>
                                <CardBody style={{backgroundColor:"#fca998"}}>
                                    <CardTitle><h4><strong>Pague 6, lleve 8</strong></h4></CardTitle>
                                    <CardSubtitle style={{fontSize:"80%"}}>Solo valido para compras en restaurante.</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="m-1 col-md-5">
                            <Card>
                                <CardImg src="assets/imagenes/camaron.jpg" alt="Camaron"/>
                                <CardImgOverlay>
                                    <h1 className="text-right"><Badge color="warning">NUEVO</Badge></h1>
                                </CardImgOverlay>
                                <CardBody style={{backgroundColor:"#fca998"}}>
                                    <CardTitle><h4><strong>¡Nuevo Producto!</strong></h4></CardTitle>
                                    <CardSubtitle style={{fontSize:"80%"}}>Deliciosas empanadas rellenas de camarón y queso.</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5 className="text-center text-home">
                                <strong>Conoce más en nuestro <Link to="/menu">Menú</Link> </strong>
                                <hr />  
                            </h5>
                        </div>
                    </div>
                    <div className="justify-content-center row">
                        <img src="assets/imagenes/logoBN.png" width="100" height="85" alt="LogoBN" />
                    </div>
                </div>
                </font>
            </div>
        );
    }
}

export default Home;