import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left */}
                <div className="me-5 d-none d-lg-block">
                    <h2 className="mb-4 text-uppercase text-center">get in touch</h2>
                    <p>yossr@gmail.com</p>
                    <p>01111111111</p>
                </div>

                <div>
                    <a href="/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>

            </section>


            <Container className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <Row>
                    <Col>
                        <p>Copyright © {new Date().getFullYear()}</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;
