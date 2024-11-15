import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Search from './components/search/Search';
import Menu from './components/menu/Menu';
import Workers from './components/workers/Workers';
import Profile from './components/profile/Profile';
import None from './components/none/None';
import Popup from './components/popup/Popup';
import { getWorkers } from './gateway/gateway';

import Error from './features/Error';
import Skeleton from './features/Skeleton';
import EmployeeInfo from './features/EmployeeInfo';
import SortDialog from './features/Filter/components/SortDialog';
import SearchInput from './features/Filter/components/SearchInput';
import PositionTabs from './features/Filter/components/PositionTabs';

import './index.scss';
const App = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers().then(data => {
      setWorkers(data);
    });
  }, []);

  const [activePosition, setActivePosition] = useState('All');

  const [input, setInput] = useState('');

  const [popupOpen, setPopupOpen] = useState(false);

  const [sortOption, setSortOption] = useState(0);

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleFilterOptions = e => {
    const newActivePosition = e.target.innerHTML;
    if (activePosition !== newActivePosition) setActivePosition(newActivePosition);
  };

  const handlePopup = () => {
    document.body.style.overflow = popupOpen ? 'auto' : 'hidden';
    setPopupOpen(!popupOpen);
  };

  const handleSortOptions = e => {
    if (e.target.id === 'close') {
      handlePopup();
    } else if (e.target.type === 'radio') {
      setSortOption(e.target.id);
    } else return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          exact
          path="/"
          element={[
            <SearchInput
              onOpenPopup={handlePopup}
              onSetInput={handleInput}
              input={input}
              sortOption={sortOption}
            />,
            <PositionTabs onFilter={handleFilterOptions} activePosition={activePosition} />,
          ]}
        >
          <Route
            index
            errorElement={
              <Error
                img="./images/ufo.png"
                textMain="Unexpected error occurred..."
                text="Try again a bit later"
                reloadText="Reload page"
              />
            }
            element={
              workers.length === 0 ? (
                <section className="section">
                  <ul>
                    {new Array(Math.ceil((window.innerHeight - 155) / 84)).fill(0).map(() => (
                      <Skeleton />
                    ))}
                  </ul>
                </section>
              ) : (
                <Workers
                  activePosition={activePosition}
                  input={input}
                  sortOption={sortOption}
                  workers={workers}
                />
              )
            }
          />
        </Route>
        {/* <Route path="profile/:id" element={<Profile workers={workers} />} /> */}
        <Route path="profile/:id" element={<EmployeeInfo workers={workers} />} />
      </>,
    ),
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
      {/* <Popup
        onOpenPopup={handlePopup}
        onSortOptions={handleSortOptions}
        popupOpen={popupOpen}
        sortOption={sortOption}
      /> */}
      <SortDialog
        onOpenPopup={handlePopup}
        onSortOptions={handleSortOptions}
        popupOpen={popupOpen}
        sortOption={sortOption}
      />
    </div>
  );
};

export default App;
