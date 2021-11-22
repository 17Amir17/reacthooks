import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AutoCompleteBox from './Components/AutoCompleteBox';
import CountryContextProvider from './Contexts/CountryContext';

ReactDOM.render(
  <React.StrictMode>
    <CountryContextProvider>
      <AutoCompleteBox />
    </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
