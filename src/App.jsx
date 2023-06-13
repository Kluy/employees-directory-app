import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { useState } from 'react';

const App = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="page">
      <Header />
      <Headline />
      <Get registered={registered} />
      <Form setRegistered={setRegistered} registered={registered} />
    </div>
  );
};

export default App;
