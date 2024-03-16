import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AboutMe() {
    return (
        <section>
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <h2 className="heading">About Me</h2>
                    </Col>
                    <Col md={6}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Button variant="primary" href="../../../../../myResume.pdf" download="myResume.pdf">Download Resume</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;
