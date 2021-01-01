import React, { useState } from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import { Container } from './styles';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardValidate, setCardValidate] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardInstallment, setCardInstallment] = useState(1);

  const handleCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardName = (event) => {
    setCardName(event.target.value);
  };

  const handleCardCVV = (event) => {
    setCardCVV(event.target.value);
  };

  const handleCardValidate = (event) => {
    setCardValidate(event.target.value);
  };

  const handleCardInstallment = (event) => {
    setCardInstallment(event.target.value);
  };

  return (
    <>
      <Container>
        <Card
          cardNumber={cardNumber}
          cardName={cardName}
          cardValidate={cardValidate}
        />
        <input
          type="text"
          name="card-number"
          placeholder="Número do seu cartão"
          value={cardNumber}
          onChange={handleCardNumber}
        />
        <input
          type="text"
          name="card-name"
          placeholder="Nome (igual ao cartão)"
          value={cardName}
          onChange={handleCardName}
        />
        <input
          type="text"
          name="card-validate"
          placeholder="Validate"
          value={cardValidate}
          onChange={handleCardValidate}
        />
        <input
          type="number"
          name="card-cvv"
          placeholder="CVV"
          value={cardCVV}
          onChange={handleCardCVV}
        />
        <select
          name="card-installment"
          value={cardInstallment}
          onChange={handleCardInstallment}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <Button>Continuar</Button>
      </Container>
    </>
  );
};

export default Checkout;
