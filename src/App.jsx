import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { useState } from 'react';

const App = () => {
  const [reset, setReset] = useState(false);

  console.log(reset);

  return (
    <div className="page">
      <Header />
      <Headline />
      <Get reset={reset} />
      <Form setReset={setReset} />
    </div>
  );
};

export default App;
