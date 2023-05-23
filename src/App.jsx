import React from 'react';
import Header from './components/header/Header';

import store from './store';
import Headline from './components/headline/Headline';
import Main from './components/main/Main';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Headline />
      <Main />
    </div>
  );
};

export default App;
