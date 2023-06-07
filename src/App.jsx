import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { getToken, postUser } from './gateway/gateway';
import { useState } from 'react';

const App = () => {
  const [reset, setReset] = useState(true);
  console.log(reset);

  return (
    <div className="page">
      <Header />
      <Headline />
      <Get reset={reset} />
      {/* <Form setReset={setReset} onSubmit={sendRequest} /> */}
      <Form setReset={setReset} />
    </div>
  );
};

export default App;
