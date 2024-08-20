import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import img from '../assets/main.png.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '80vh',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Row>
        <Col>
          <Card className="shadow-sm p-4" style={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <Card.Body>
              <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#343a40' }}>
                Login to Your Account
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ color: '#495057', fontWeight: '500' }}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      borderRadius: '8px',
                      padding: '10px',
                      border: '1px solid #ced4da',
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-4">
                  <Form.Label style={{ color: '#495057', fontWeight: '500' }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      borderRadius: '8px',
                      padding: '10px',
                      border: '1px solid #ced4da',
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-4"
                  style={{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    padding: '10px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s, transform 0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#0056b3';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#007bff';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Sign In
                </Button>
              </Form>
              <p className="text-center mt-4">
                <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontWeight: '500' }}>
                  Forgot your password?
                </a>
              </p>
              <p className="text-center">
                Don't have an account?{' '}
                <a href='/register' style={{ color: '#007bff', textDecoration: 'none', fontWeight: '500' }}>
                  Register
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
