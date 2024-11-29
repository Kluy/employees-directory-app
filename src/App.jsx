import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { getEmployees } from './entities/employee/gateway/gateway';

import Error from './features/Error';
import Skeleton from './features/Skeleton';
import EmployeeProfile from './features/EmployeeProfile';
import EmployeesList from './features/EmployeesList';
import Filter from './features/Filter';

import './index.scss';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(data => {
      setEmployees(data);
    });
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
              employees.length === 0 ? (
                <section className="section">
                  <ul>
                    {new Array(Math.ceil((window.innerHeight - 155) / 84)).fill(0).map(() => (
                      <Skeleton />
                    ))}
                  </ul>
                </section>
              ) : (
                <EmployeesList
                  input={input}
                  employees={employees}
                  sortOption={sortOption}
                  activePosition={activePosition}
                />
              )
            }
          />
        </Route>
        <Route
          path="profile/:id"
          element={<EmployeeProfile employees={employees} />}
          errorElement={<Error />}
        />
      </>,
    ),
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
