import React from "react";
import Card from 'react-bootstrap/Card';

const PortfolioCard = (props) => {
    return (
        <Card className="card my-3" style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
            <Card.Body>
                <Card.Text className="text-center">
                    {props.technology}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PortfolioCard;
