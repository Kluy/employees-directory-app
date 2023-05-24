import React from 'react';
import Header from './components/header/Header';

import store from './store';
import Headline from './components/headline/Headline';
import SectionGet from './components/sectionGet/SectionGet';
import SectionPost from './components/sectionPost/SectionPost';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Headline />
      <SectionGet />
      <SectionPost />
    </div>
  );
};

export default App;
