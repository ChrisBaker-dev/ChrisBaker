import React from 'react';
import Col  from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {

    return (
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                        Chris Baker
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                        Built by Chris Baker
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;