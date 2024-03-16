import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from "./PortfolioCard";
const Portfolio = () => {
    const technologies = ["web design", "mobile design", "logo design", "web application development", "mobile application development", "pwa development"];
    return (
        <Container className="py-5 h-100">
            <Row>
                {technologies.map((data, index) => (
                    <Col key={index} md={4}>
                        <PortfolioCard technology={[data]}></PortfolioCard>
                    </Col>
                ))}
            </Row>
        </Container>
    );

}

export default Portfolio