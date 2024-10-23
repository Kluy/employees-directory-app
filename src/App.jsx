import React from 'react';
// import Body from './components/body/Body';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  ErrorBoundary,
} from 'react-router-dom';
// import App from './App';
import Body from './components/body/Body';
import Profile from './components/profile/Profile';
import Workers from './components/workers/Workers';
import Worker from './components/worker/Worker';
import { getWorkers } from './gateway/gateway';
import './index.scss';
import None from './components/none/None';
import Menu from './components/menu/Menu';
import Search from './components/search/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        exact
        path="/"
        element={<Body />}
        errorElement={
          <None
            img="../images/ufo.png"
            textMain="Unexpected error occurred..."
            text="Try again a bit later"
            reloadText="Reload page"
          />
        }
        loader={() =>
          getWorkers().then(data => {
            console.log(data);
            // setWorkers(data);
            return data;
          })
        }
      >
        <Route element={<Workers workers={[]} />}></Route>
      </Route>
      <Route
        path="profile/:id"
        // workers={workers}
        element={<Profile />}
        errorElement={
          <None
            img="../images/ufo.png"
            textMain="Unexpected error occurred..."
            text="Try again a bit later"
            reloadText="Reload page"
          />
        }
        loader={() =>
          getWorkers().then(data => {
            console.log(data);
            // setWorkers(data);
            return data;
          })
        }
      />
    </>,
  ),
);

const App = () => {
  return (
    <div className="app">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
