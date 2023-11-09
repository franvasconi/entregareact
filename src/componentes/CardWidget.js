import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const CardWidget = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Carrito</Card.Title>
        <Card.Text>
          <i className="fas fa-shopping-cart"></i>
          <Badge variant="info">0</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardWidget;
