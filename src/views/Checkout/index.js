import React, { useState } from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import {
  Breadcrumb,
  CheckoutContainer,
  TitleContainer,
  Title,
  Input,
  Select,
  InputContainer,
} from './styles';
import cardImage from './images/card.svg';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardValidate, setCardValidate] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardInstallment, setCardInstallment] = useState(0);

  const handleCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardName = (event) => {
    setCardName(event.target.value.toUpperCase());
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
      <CheckoutContainer>
        <Breadcrumb>
          <strong>Etapa 2</strong> de 3
        </Breadcrumb>
        <TitleContainer>
          <img src={cardImage} alt="" />
          <Title>Adicione um novo cartão de crédito</Title>
        </TitleContainer>
        <Card
          cardNumber={cardNumber}
          cardName={cardName}
          cardValidate={cardValidate}
        />
        <Input
          mask="9999  9999  9999  9999"
          type="text"
          name="card-number"
          placeholder="Número do seu cartão"
          value={cardNumber}
          onChange={handleCardNumber}
        />
        <Input
          type="text"
          name="card-name"
          maxLength="50"
          placeholder="Nome (igual ao cartão)"
          value={cardName}
          onChange={handleCardName}
        />
        <InputContainer>
          <Input
            mask="99/99"
            type="text"
            name="card-validate"
            placeholder="Validate"
            value={cardValidate}
            onChange={handleCardValidate}
          />
          <Input
            mask="999"
            type="text"
            name="card-cvv"
            placeholder="CVV"
            value={cardCVV}
            onChange={handleCardCVV}
          />
        </InputContainer>
        <Select
          name="card-installment"
          value={cardInstallment}
          onChange={handleCardInstallment}
        >
          <option value="0" selected disabled>
            Número de parcelas
          </option>
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
        </Select>
        <Button>Continuar</Button>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
