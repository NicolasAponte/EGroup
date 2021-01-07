import React from 'react';
import { Breadcrumb, BreadcrumbItem,Card, CardImg,CardImgOverlay,CardBody,CardTitle,Badge, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";


function CrearProducto({producto}) {
    return(
        <div className=" col-12 col-md-4 m-1">
                <Card>
                    <CardImg src={producto.imagen} height="300px" alt={producto.nombre}/>
                    <CardImgOverlay>
                        <h1><Badge color="danger">{"$"+ producto.precio}</Badge></h1>
                    </CardImgOverlay>
                    <CardBody>
                        <CardTitle><h4 className="text-home"><strong>{producto.nombre}</strong></h4></CardTitle>
                        <CardSubtitle>{producto.descripcion}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
    );
}


function Menu(props){

    const crearPlato = props.platos.map((plato) => {
        return(
            <CrearProducto producto={plato}/>
        );
    });

    const crearBebida = props.bebidas.map((bebida) => {
        return(
            <CrearProducto producto={bebida}/>
        );
    });

    return(
        <div className="contenido container">
            <font face="lorem ipsum">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menú</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="justify-content-center row">
                    <h2 className="col-12 text-home text-center"><strong>Principales Productos</strong></h2>
                    {crearPlato}
                </div>
                <hr />  
                <div className="justify-content-center row">
                    <h4 className="col-12 text-home text-center"><strong>Acompaña con Nuestras Refrescantes Bebidas</strong></h4>
                    {crearBebida}
                </div>
                <hr />  
                <div className="justify-content-center row">
                    <img src="assets/imagenes/logoBN.png" width="100" height="85" alt="LogoBN" />
                </div>
            </font>
        </div>
    );
}

export default Menu;