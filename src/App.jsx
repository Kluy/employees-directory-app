import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import store from './store';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Provider store={store}>
        <Content />
      </Provider>
      <Footer />
    </div>
  );
};

export default App;
