import React, { useState } from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import {
  Breadcrumb,
  CheckoutContainer,
  ColCard,
  ColInfos,
  Input,
  InputContainer,
  Select,
  Title,
  TitleContainer,
} from './styles';
import cardImage from './images/card.svg';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardValidate, setCardValidate] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardInstallment, setCardInstallment] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <>
      <CheckoutContainer>
        <ColCard>
          <Breadcrumb>
            <strong>Etapa 2</strong> de 3
          </Breadcrumb>
          <TitleContainer>
            <img src={cardImage} alt="" />
            <Title>Adicione um novo cartão de crédito</Title>
          </TitleContainer>
          <Card
            flipped={cardFlipped}
            cardNumber={cardNumber}
            cardName={cardName}
            cardValidate={cardValidate}
            cardCVV={cardCVV.replace(/[0-9]/g, '∗')}
          />
        </ColCard>
        <ColInfos>
          <Input
            mask="9999  9999  9999  9999"
            type="text"
            name="card-number"
            placeholder="Número do seu cartão"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />
          <Input
            type="text"
            name="card-name"
            maxLength="50"
            placeholder="Nome (igual ao cartão)"
            value={cardName}
            onChange={(event) => setCardName(event.target.value.toUpperCase())}
          />
          <InputContainer>
            <Input
              mask="99/99"
              type="text"
              name="card-validate"
              placeholder="Validate"
              value={cardValidate}
              onChange={(event) => setCardValidate(event.target.value)}
            />
            <Input
              mask="999"
              type="text"
              name="card-cvv"
              placeholder="CVV"
              value={cardCVV}
              onChange={(event) => setCardCVV(event.target.value)}
              onFocus={() => setCardFlipped(true)}
              onBlur={() => setCardFlipped(false)}
            />
          </InputContainer>
          <Select
            name="card-installment"
            value={cardInstallment}
            onChange={(event) => setCardInstallment(event.target.value)}
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
        </ColInfos>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
