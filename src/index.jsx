import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  ErrorBoundary,
} from 'react-router-dom';
import App from './App';
import Body from './components/body/Body';
import Profile from './components/profile/Profile';
import Workers from './components/workers/Workers';
import Worker from './components/worker/Worker';
import { getWorkers } from './gateway/gateway';
import './index.scss';
import None from './components/none/None';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<App />}
        errorElement={
          <None
            img="../images/ufo.png"
            textMain="Unexpected error occurred..."
            text="Try again a bit later"
            reloadText="Reload page"
          />
        }
        action={console.log(1)}
        loader={() =>
          getWorkers().then(data => {
            console.log(data);
            // setWorkers(data);
            return data;
          })
        }
      ></Route>
      ,
      <Route
        path="/profile/:id"
        // workers={workers}
        element={<Profile />}
        loader={() =>
          getWorkers().then(data => {
            console.log(data);
            // setWorkers(data);
            return data;
          })
        }
      />
      {/* , ,<Route path="/profile/:id" element={<Profile />} />, */}
    </>,
    // <Route path="/profile/:id" element={<Profile workers={workers} />} />,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
