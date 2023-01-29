import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import store from './store';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/:dep" element={<Content />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Footer />
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="page">
//       <Header />
//       <Provider store={store}>
//         <Content />
//       </Provider>
//       <Footer />
//     </div>
//   );
// };

export default App;
