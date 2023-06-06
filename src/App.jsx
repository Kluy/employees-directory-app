import React from 'react';
import Header from './components/header/Header';

import store from './store';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { getUsers, fetchData, fetchUsers, getToken, postUser } from './gateway/gateway';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  // const sendRequest = e => {
  //   e.preventDefault();
  //   getToken().then(token => postUser(user, token));
  // };

  return (
    <div className="page">
      <Header />
      <Headline />
      <Get />
      <Form />
      {/* <Form onSubmit={sendRequest} /> */}
    </div>
  );
};

export default App;
