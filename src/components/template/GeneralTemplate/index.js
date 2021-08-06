import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GeneralTemplate = ({children}) => {

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Nav>
            <Nav.Item>
              <Link to="/login">Login</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/projects">Projetos</Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>{children}</Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  )
};

export default GeneralTemplate;