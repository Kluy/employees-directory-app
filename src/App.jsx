import React from 'react';
import { Provider } from 'react-redux';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
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
