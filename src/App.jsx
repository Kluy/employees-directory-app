import React from 'react';
import Header from './components/header/Header';

import store from './store';
import Headline from './components/headline/Headline';
import SectionGet from './components/sectionGet/SectionGet';
import From from './components/form/Form';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Headline />
      <SectionGet />
      <From />
    </div>
  );
};

export default App;
