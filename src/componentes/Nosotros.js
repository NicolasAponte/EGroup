import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card,CardImg,CardTitle,CardBody, CardSubtitle} from "reactstrap";
import { Link } from "react-router-dom";

function Nosotros(props) {
    

    const crearTarjeta = props.equipo.map((miembro) => {
        return(
            <div className="justify-content-center mt-5 row">
                <div className="col-md-3 col-7">
                    <Card>
                        <CardImg height="200px" src={miembro.imagen}/>
                        <CardBody className="d-block d-md-none"> 
                            <CardTitle><h5 className="text-home"><strong>{miembro.nombre}</strong></h5></CardTitle>
                            <CardSubtitle><h6>{miembro.cargo}</h6></CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-7 d-none d-md-block">
                    <h3 className="text-home"><strong>{miembro.nombre}</strong></h3>
                    <h5 style={{color:"#FF7E64"}}>{miembro.cargo}</h5>
                    <h6 style={{textAlign:"justify"}}>{miembro.descripcion}</h6>
                </div>
            </div>
        );
    });

    return(
        <div className="container contenido">
            <font face="lorem ipsum">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Sobre Nosotros</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2 className="text-home text-center"><strong>Sobre Nosotros</strong></h2>
                        <hr />
                    </div>  
                </div>
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <h3 className="text-center text-home">Nuestra Historia</h3>
                        <p className="text-center ">Nuestro camino inicia con una venta de empanadas ambulante como las que se pueden encontrar
                            en casi cualquier calle de Bogotá, mi hermano y yo decidimos iniciar éste negocio con el fin de poder
                            ayudar con los gastos en el hogar. Con el tiempo el negocio fue creciondo gracias a nuestra dedicación y 
                            a nuestro saber inconfundible hasta lograr la apertura de nuestro punto principal.
                        </p>
                    </div>
                    <div className="text-center col-12 col-md-6">
                        <img src="assets/imagenes/logo.png" alt="Logo" />
                    </div>
                </div>
                <hr />
                <div className="justify-content-center row">
                    <h3 className="text-home">Equipo de Trabajo</h3>
                </div>
                {crearTarjeta}
                <hr /> 
                <div className="justify-content-center row">
                    <img src="assets/imagenes/logoBN.png" width="100" height="85" alt="LogoBN" />
                </div>
            </font>
        </div>

    );
}

export default Nosotros;