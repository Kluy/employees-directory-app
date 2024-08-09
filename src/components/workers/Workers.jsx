import React from 'react';
import { useState, useEffect } from 'react';
import { getWorkers } from '../../gateway/gateway';
import Preloader from '../preloader/Preloader';
import WorkersList from '../workers-list/WorkersList';
import None from '../none/None';

import './workers.scss';

const Workers = ({ activePosition, input, sortId }) => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers().then(data => setWorkers(data));
  }, []);

  const currentMonth = new Date().getMonth();

  const searchWorkers = (currentData, input) =>
    currentData.toLowerCase().includes(input.toLowerCase());

  const workersList = workers.filter(
    ({ name, position, email }) =>
      (activePosition === 'All' || searchWorkers(activePosition, position)) &&
      (searchWorkers(name, input) || searchWorkers(email, input)),
  );

  return (
    <section className="section">
      {workers.length > 0 ? (
        <>
          {workersList.length > 0 ? (
            sortId === 'birthday' ? (
              <>
                <WorkersList
                  sortId={sortId}
                  list={workersList.filter(
                    ({ birthDate }) => new Date(birthDate).getMonth() > currentMonth,
                  )}
                />
                <div className="delimiter">
                  <div className="delimiter_line"></div>
                  <div className="delimiter_text"> {new Date().getFullYear() + 1}</div>
                  <div className="delimiter_line"></div>
                </div>
                <WorkersList
                  sortId={sortId}
                  list={workersList.filter(
                    ({ birthDate }) => new Date(birthDate).getMonth() < currentMonth,
                  )}
                />
              </>
            ) : (
              <WorkersList sortId={sortId} list={workersList} />
            )
          ) : (
            <None />
          )}
        </>
      ) : (
        <Preloader />
      )}
    </section>
  );
};

export default Workers;
