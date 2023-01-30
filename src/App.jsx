import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Content from './components/Content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Content />}></Route>
            <Route path="/:isDepature" element={<Content />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Footer />
    </div>
  );
};

export default App;
