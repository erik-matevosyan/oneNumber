import React from 'react';
import { Card, Container } from 'react-bootstrap';

const LiabiltiesCard = () => {
  return (
    <Card>
      <Card.Title>Liabilties</Card.Title>
      <Card.Body>
        <Card.Text> liability1</Card.Text>
        <Card.Text> liability2</Card.Text>
        <Card.Text> liability3</Card.Text>
        <Card.Text> liability4</Card.Text>
        <Card.Text> liability5</Card.Text>
        <Card.Text> liability6</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default LiabiltiesCard;
