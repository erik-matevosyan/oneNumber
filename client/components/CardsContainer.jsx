import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import AssetsCard from './AssetsCard.jsx';
import LiabilitiesCard from './LiabilitiesCard.jsx';
import NetWorthCard from './NetWorthCard.jsx';

const CardsContainer = () => {
  return (
    <Container>
      <CardGroup>
        <AssetsCard />
        <LiabilitiesCard />
        <NetWorthCard />
      </CardGroup>
    </Container>
  );
};

export default CardsContainer;
