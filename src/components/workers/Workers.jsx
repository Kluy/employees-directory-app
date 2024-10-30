// import React from 'react';
// import WorkersList from '../workers-list/WorkersList';
// import Delimiter from '../delimiter/Delimiter';

// const Workers = ({ activePosition, input, sortId, workers }) => {
//   console.log(workers);
//   const currentMonth = new Date().getMonth();

//   const searchWorkers = (currentData, input) =>
//     currentData.toLowerCase().includes(input.toLowerCase());

//   const workersList = workers.filter(
//     ({ name, position, email }) =>
//       (activePosition === 'All' || searchWorkers(activePosition, position)) &&
//       (searchWorkers(name, input) || searchWorkers(email, input)),
//   );

//   const birthDateList = (list, more) =>
//     more
//       ? list.filter(({ birthDate }) => new Date(birthDate).getMonth() > currentMonth)
//       : list.filter(({ birthDate }) => new Date(birthDate).getMonth() < currentMonth);

//   return (
//     <section className="section">
//       {workersList.length > 0 ? (
//         sortId === 'birthday' ? (
//           <>
//             <WorkersList sortId={sortId} list={birthDateList(workersList, true)} />
//             <Delimiter />
//             <WorkersList sortId={sortId} list={birthDateList(workersList)} />
//           </>
//         ) : (
//           <WorkersList sortId={sortId} list={workersList} />
//         )
//       ) : (
//         <None
//           text="Try another request"
//           textMain="We didn't find anyone"
//           img="../images/none.png"
//         />
//       )}
//     </section>
//   );
// };

// export default Workers;

import React from 'react';
import WorkersList from '../workers-list/WorkersList';
import None from '../none/None';
import Delimiter from '../delimiter/Delimiter';

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
    more
      ? list.filter(({ birthDate }) => new Date(birthDate).getMonth() > currentMonth)
      : list.filter(({ birthDate }) => new Date(birthDate).getMonth() < currentMonth);

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
          <WorkersList sortId={sortId} list={workersList} />
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
