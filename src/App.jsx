import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store';
import Headline from './components/headline/Headline';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Headline />
    </div>
  );
};

export default App;
