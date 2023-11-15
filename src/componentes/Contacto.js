import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contacto.css'; // Importa un archivo de estilos para Contacto

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <Form>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu nombre" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Escribe tu correo" />
        </Form.Group>

        <Form.Group controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <div className="redes-sociales">
        <p>Sígueme en LinkedIn:</p>
        <a href="https://www.linkedin.com/in/lorenzo-shammah-zalba-71027829a/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contacto;

