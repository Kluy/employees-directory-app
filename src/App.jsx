import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Get from './components/get/Get';
import Form from './components/form/Form';
import { getUsers, getToken, postUser } from './gateway/gateway';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [usersData, setUsersData] = useState({
    users: [],
    page: 1,
    totalPages: null,
  });

  console.log(usersData);

  const setPage = page => {
    renderUsers(page);
  };

  const sendRequest = e => {
    e.preventDefault();
    // renderUsers(1);
    getToken().then(token => postUser(user, token).then(result => renderUsers(1)));
  };

  const renderUsers = page => {
    getUsers(page).then(data => {
      setUsersData({ users: data.users, page: data.page, totalPages: data.total_pages });
      console.log(usersData.users);
    });
  };

  useEffect(() => {
    renderUsers(usersData.page);
  }, []);

  return (
    <div className="page">
      <Header />
      <Headline />
      <Get usersData={usersData} setPage={setPage} />
      <Form onSubmit={sendRequest} />
    </div>
  );
};

export default App;
