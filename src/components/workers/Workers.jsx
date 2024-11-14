import React from 'react';
import WorkersList from '../workers-list/WorkersList';
import Delimiter from '../delimiter/Delimiter';
import None from '../none/None';

const Workers = ({ activePosition, input, sortOption, workers }) => {
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
        sortOption == 1 ? (
          <>
            <WorkersList sortOption={sortOption} list={birthDateList(workersList, true)} />
            <Delimiter />
            <WorkersList sortOption={sortOption} list={birthDateList(workersList)} />
          </>
        ) : (
          <WorkersList
            list={workersList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase())}
          />
        )
      ) : (
        <None
          textMain="We didn't find anyone"
          text="Try to adjust your request"
          img="./images/none.png"
        />
      )}
    </section>
  );
};

export default Workers;
