import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { Provider } from 'react-redux';

import { useState } from 'react';
import store from './store';

const App = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="page">
      <Header />
      <Headline />
      <Provider store={store}>
        <Get registered={registered} />
        <Form setRegistered={setRegistered} registered={registered} />
      </Provider>
    </div>
  );
};

export default App;
