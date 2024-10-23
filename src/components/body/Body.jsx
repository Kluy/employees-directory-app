import React from 'react';
import Search from '../search/Search';
import Menu from '../menu/Menu';
import Workers from '../workers/Workers';
import Worker from '../worker/Worker';
import None from '../none/None';
import Popup from '../popup/Popup';
import Profile from '../profile/Profile';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { getWorkers } from '../../gateway/gateway';

import { useEffect, useState } from 'react';

const Body = () => {
  const [workers, setWorkers] = useState([]);

  console.log('workers');
  console.log(workers);

  // const workers = useLoaderData();
  // console.log('workers');
  // console.log(workers);

  // setWorkers(loaderData);
  // console.log('loader');
  // console.log(loader);

  useEffect(() => {
    getWorkers().then(data => {
      console.log(data);
      setWorkers(data);
    });
  }, []);

  // const [profileId, setProfileId] = useState(null);

  const [activePosition, setActivePosition] = useState('All');

  const [input, setInput] = useState('');

  const [popupOpen, setPopupOpen] = useState(false);

  const [sortId, setSortId] = useState('a-z');

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleFilterOptions = e => {
    const newActivePosition = e.target.innerHTML;
    if (activePosition !== newActivePosition) setActivePosition(newActivePosition);
  };

  const handlePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleSortOptions = e => {
    if (e.target.id === 'close') {
      handlePopup();
    } else if (e.target.type === 'radio') {
      setSortId(e.target.id);
    } else return;
  };

  // const handleProfileId = e => {
  //   const worker = e.target.closest('.worker');
  //   if (worker) setProfileId(worker.dataset.id);
  // };

  return (
    <>
      <Search onOpenPopup={handlePopup} onSetInput={handleInput} input={input} sortId={sortId} />
      <Menu onFilter={handleFilterOptions} activePosition={activePosition} />,
      <Workers
        // onSetProfileId={handleProfileId}
        activePosition={activePosition}
        input={input}
        sortId={sortId}
        workers={workers}
      />
      <Popup
        onOpenPopup={handlePopup}
        onSortOptions={handleSortOptions}
        popupOpen={popupOpen}
        sortId={sortId}
      />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/profile/:id" element={<Worker workers={workers} />}></Route> */}
    //     <Route
    //       path="/error"
    //       element={
    //         <None
    //           img="../images/ufo.png"
    //           textMain="Unexpected error occurred..."
    //           text="Try again a bit later"
    //           reloadText="Reload page"
    //         />
    //       }
    //     />
    //     <Route
    //       exact
    //       path="/"
    //       element={[
    //         <Search
    //           onOpenPopup={handlePopup}
    //           onSetInput={handleInput}
    //           input={input}
    //           sortId={sortId}
    //         />,
    //         <Menu onFilter={handleFilterOptions} activePosition={activePosition} />,
    //         <Workers
    //           // onSetProfileId={handleProfileId}
    //           activePosition={activePosition}
    //           input={input}
    //           sortId={sortId}
    //           workers={workers}
    //         />,
    //         <Popup
    //           onOpenPopup={handlePopup}
    //           onSortOptions={handleSortOptions}
    //           popupOpen={popupOpen}
    //           sortId={sortId}
    //         />,
    //       ]}
    //       errorElement={
    //         <None
    //           img="../images/ufo.png"
    //           textMain="Unexpected error occurred..."
    //           text="Try again a bit later"
    //           reloadText="Reload page"
    //         />
    //       }
    //     ></Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default Body;
