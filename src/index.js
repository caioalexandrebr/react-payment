import React from 'react';
import ReactDOM from 'react-dom';

import './fonts/index.css';
import { Normalize } from 'styled-normalize';
import Checkout from './views/Checkout';

const Root = () => (
  <>
    <Normalize />
    <Checkout />
  </>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
