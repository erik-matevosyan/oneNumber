import React from 'react';
import { Card, Container } from 'react-bootstrap';

const AssetsCard = () => {
  return (
    <Card>
      <Card.Title>Assets</Card.Title>
      <Card.Body>
        <Card.Text> Asset1</Card.Text>
        <Card.Text> Asset2</Card.Text>
        <Card.Text> Asset3</Card.Text>
        <Card.Text> Asset4</Card.Text>
        <Card.Text> Asset5</Card.Text>
        <Card.Text> Asset6</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default AssetsCard;
