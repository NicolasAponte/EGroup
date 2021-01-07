import React from 'react';
import { Link } from "react-router-dom";

function Pie() {

    return(
        <div className="pie-pagina">
            <font face="lorem ipsum">
                <div className="container">
                    <div className="row pt-4">    
                        <div className="text-center mapa-footer col-md-4 ">
                            <h5><strong>Encuentranos en: </strong></h5>
                            <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7887629160437!2d-74.06711428586516!3d4.631739896635346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a25f0c0a065%3A0x22476cb9a30af2d2!2zQ3JhLiA4ICM0NS0zLCBCb2dvdMOh!5e0!3m2!1ses-419!2sco!4v1609878728652!5m2!1ses-419!2sco" width="300" height="200" frameborder="0" allowfullscreen=""  tabindex="0"></iframe>
                        </div>
                        <div className="text-center pl-4 ml-3 col-sm-3 d-none d-lg-block">
                            <h5><strong>Links</strong></h5>
                            <ul className="list-unstyled">
                                <li><Link to="/home">Inicio</Link></li>
                                <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                                <li><Link to="/menu">Menú</Link></li>
                                <li><Link to="/contactanos">Contáctanos</Link></li>
                            </ul>
                        </div>    
                        <div className="pl-5 ml-5 col-lg-4 col-md-6">
                            <h5><strong>Conecta con nosotros: </strong></h5>
                            Oficina Principal: Cra 8 # 45 - 04<br />
                            Bogotá, Colombia.<br />
                            <i className="fa fa-phone fa-lg"></i>: 4 98 26 84<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:bend_empanadas@outlook.com">
                                bend_empanadas@outlook.com</a>
                            <div>
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2021 Bendita Empanda</p>
                        </div>
                    </div>
                </div>
            </font>
            
        </div>
    );
}

export default Pie;