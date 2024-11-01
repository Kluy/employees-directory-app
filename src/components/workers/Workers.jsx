import React from 'react';
import WorkersList from '../workers-list/WorkersList';
import Delimiter from '../delimiter/Delimiter';
import None from '../none/None';

const Workers = ({ activePosition, input, sortId, workers }) => {
  const currentMonth = new Date().getMonth();

  const searchWorkers = (currentData, input) =>
    currentData.toLowerCase().includes(input.toLowerCase());

  const workersList = workers.filter(
    ({ name, position, email }) =>
      (activePosition === 'All' || searchWorkers(activePosition, position)) &&
      (searchWorkers(name, input) || searchWorkers(email, input)),
  );

  const birthDateList = (list, more) =>
    (more
      ? list.filter(({ birthDate }) => new Date(birthDate).getMonth() > currentMonth)
      : list.filter(({ birthDate }) => new Date(birthDate).getMonth() < currentMonth)
    ).sort((a, b) =>
      new Date(a.birthDate).getMonth() === new Date(b.birthDate).getMonth()
        ? new Date(a.birthDate).getDate() > new Date(b.birthDate).getDate()
        : new Date(a.birthDate).getMonth() > new Date(b.birthDate).getMonth(),
    );

  return (
    <section className="section">
      {workersList.length > 0 ? (
        sortId === 'birthday' ? (
          <>
            <WorkersList sortId={sortId} list={birthDateList(workersList, true)} />
            <Delimiter />
            <WorkersList sortId={sortId} list={birthDateList(workersList)} />
          </>
        ) : (
          <WorkersList
            sortId={sortId}
            list={workersList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase())}
          />
        )
      ) : (
        <None
          text="Try another request"
          textMain="We didn't find anyone"
          img="../images/none.png"
        />
      )}
    </section>
  );
};

export default Workers;
