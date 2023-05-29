import React from 'react';
import Header from './components/header/Header';

import store from './store';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { getUsers, fetchData } from './gateway/gateway';
import { useEffect } from 'react';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Headline />
      <Get />
      <Form />
    </div>
  );
};

export default App;
