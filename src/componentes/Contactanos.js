import React,{ Component } from "react";
import { Breadcrumb, BreadcrumbItem, Form,Button,FormGroup,Label,Input,Col} from "reactstrap";
import { Link } from "react-router-dom";



class Contactanos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            primer_nombre: '',
            apellidos:'',
            telefono: '',
            email: '',
            agree: false,
            forma_contacto: 'Tel.',
            mensaje: ''
        }
        this.envio = this.envio.bind(this);
        this.cambioTexto = this.cambioTexto.bind(this);

    }

    cambioTexto(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    envio(event) {
        console.log("Se envió:" +JSON.stringify(this.state));
        alert("Se envió:" +JSON.stringify(this.state));
        this.setState({
            primer_nombre: '',
            apellidos:'',
            telefono: '',
            email: '',
            agree: false,
            forma_contacto: 'Tel.',
            mensaje: ''
        });
        event.preventDefault();
    }
    render() {
        return(
            <div className="container contenido">
                <font face="lorem ipsum">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contáctanos</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h2 className="col-12 text-home text-center"><strong>Contáctanos</strong></h2>
                            <hr />
                        </div> 
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-9">
                            <Form className="text-home" onSubmit={this.envio}>
                                <FormGroup row>
                                    <Label htmlFor="primer_nombre" md={2}>Primer Nombre</Label>
                                    <Col md={10}>
                                        <Input type="text" id="primer_nombre" name="primer_nombre" 
                                        placeholder="Primer Nombre" value={this.state.primer_nombre} onChange={this.cambioTexto}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="apellidos" md={2}>Apellidos</Label>
                                    <Col md={10}>
                                        <Input type="text" id="apellidos" name="apellidos" 
                                        placeholder="Apellidos" value={this.state.apellidos} onChange={this.cambioTexto}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telefono" md={2}>Num. Teléfono</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="telefono" name="telefono" 
                                        placeholder="Num. Teléfono" value={this.state.telefono} onChange={this.cambioTexto}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email" 
                                        placeholder="Email" value={this.state.email} onChange={this.cambioTexto}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:6, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.cambioTexto}/>{' '}
                                                <strong>¿Quieres que nos contactémos contigo?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3, offset: 1}}>
                                        <Input type="select" name="forma_contacto" value={this.state.forma_contacto} onChange={this.cambioTexto}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="mensaje" md={2}>Mensaje</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="mensaje" name="mensaje" 
                                        rows="12" value={this.state.mensaje} onChange={this.cambioTexto}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 0}}>
                                        <Button type="submit" style={{backgroundColor:"#ff6546"}}>
                                            Enviar
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <hr />  
                        </div>
                    </div>
                    <div className="justify-content-center row">
                        
                        <img src="assets/imagenes/logoBN.png" width="100" height="85" alt="LogoBN" />
                    </div>
                </font>
            </div>
        );
    }
}

export default Contactanos;