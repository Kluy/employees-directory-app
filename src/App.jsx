import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Error from './features/Error';
import EmployeeProfile from './features/EmployeeProfile';
import EmployeesList from './features/EmployeesList';
import Filter from './features/Filter';
import { connect, Provider } from 'react-redux';
import { getEmployeesAction } from './redux/actions/shedule.actions';
import store from './redux/store';

import './index.scss';

const App = ({ getEmployees }) => {
  const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   getEmployees().then(data => {
  //     setEmployees(data);
  //   });
  // }, []);

  useEffect(() => {
    console.log('useEffect');
    getEmployees();
  }, []);

  const [activePosition, setActivePosition] = useState('All');

  const [input, setInput] = useState('');

  const [sortOption, setSortOption] = useState(0);

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleFilterOptions = e => {
    const newActivePosition = e.target.innerHTML;
    if (activePosition !== newActivePosition) setActivePosition(newActivePosition);
  };

  const handleSortOption = option => {
    setSortOption(option);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          exact
          path="/"
          element={
            <Filter
              onSetInput={handleInput}
              onFilter={handleFilterOptions}
              onSelectSortOption={handleSortOption}
              input={input}
              sortOption={sortOption}
              activePosition={activePosition}
            />
          }
          errorElement={<Error />}
        >
          <Route
            index
            errorElement={<Error />}
            element={
              <EmployeesList
                input={input}
                sortOption={sortOption}
                activePosition={activePosition}
              />
            }
          />
        </Route>
        <Route path="profile/:id" element={<EmployeeProfile />} errorElement={<Error />} />
      </>,
    ),
  );

  return (
    <div className="app">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

const employeesDispatch = {
  getEmployees: getEmployeesAction,
};

export default connect(null, employeesDispatch)(App);

// export default App;
