import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './components/App';

const Context = styled.div`
  background-color: #eceff1;
`

ReactDOM.render(
  <Context>
    <App />
  </Context>
  , document.getElementById('root'));
