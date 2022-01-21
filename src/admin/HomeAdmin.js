import React from "react";
import Menu from './Menu';
import Conteudo from './Conteudo';
import Login from './Login';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import "../Content/css/bootstrap-datepicker.css";
import "../Content/css/jquery.timepicker.css";
import "../Content/css/fontawesome.min.css";
import "../Content/css/admin/stylesAdmin.css";

function HomeAdmin() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Videira Vix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="Perfil" className="dropdown-perfil" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Nome: {"Vander N gagno"}</NavDropdown.Item>
                            <NavDropdown.Item href="#">Email: {"vandergagno@gmail.com"}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>Painel admin</h1>
        </div>
    );
}

export default HomeAdmin;