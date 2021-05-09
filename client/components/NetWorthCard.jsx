import React from 'react';
import { Card, Container } from 'react-bootstrap';

const NetWorthCard = () => {
  return (
    <Card>
      <Card.Title>NetWorth</Card.Title>
      <Card.Body>
        <Card.Text> Net Worth1</Card.Text>
        <Card.Text> Net Worth2</Card.Text>
        <Card.Text> Net Worth3</Card.Text>
        <Card.Text> Net Worth4</Card.Text>
        <Card.Text> Net Worth5</Card.Text>
        <Card.Text> Net Worth6</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default NetWorthCard;
