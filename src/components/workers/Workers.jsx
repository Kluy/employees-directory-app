import React from 'react';
import WorkersList from '../workers-list/WorkersList';
import None from '../none/None';
import Error from '../error/Error';

import './workers.scss';

const Workers = ({ activePosition, input, sortId, workers, onSetProfileId }) => {
  const currentMonth = new Date().getMonth();

  const searchWorkers = (currentData, input) =>
    currentData.toLowerCase().includes(input.toLowerCase());

  const workersList = workers.filter(
    ({ name, position, email }) =>
      (activePosition === 'All' || searchWorkers(activePosition, position)) &&
      (searchWorkers(name, input) || searchWorkers(email, input)),
  );

  return (
    <section className="section" onClick={e => onSetProfileId(e)}>
      {workersList.length > 0 ? (
        sortId === 'birthday' ? (
          <>
            <WorkersList
              onSetProfileId={onSetProfileId}
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
        // <Error />
      )}
    </section>
  );
};

export default Workers;
