import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Buttons from './components/buttons/Buttons';
import Calendar from './components/calendar/Calendar';
import Shedule from './components/shedule/Shedule';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';

const App = () => {
  return (
    <div className="page">
      <Header />
      <div className="wrapper">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={[<Search />, <Buttons />]}></Route>
              <Route
                exact
                path="/:isDepature"
                element={[<Search />, <Buttons />, <Calendar />, <Shedule />]}
              ></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
