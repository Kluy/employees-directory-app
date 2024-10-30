import React from 'react';
import Worker from '../worker/Worker';
import { Link } from 'react-router-dom';

const WorkersList = ({ sortId, list }) => {
  //  {
  //    // workersList.length > 0 ? (
  //    sortId === 'birthday' ? (
  //      <>
  //        <WorkersList
  //          sortId={sortId}
  //          list={workersList.filter(({ birthDate }) => new Date(birthDate).getMonth() > currentMonth)}
  //        />
  //        <div className="delimiter">
  //          <div className="delimiter_line"></div>
  //          <div className="delimiter_text"> {new Date().getFullYear() + 1}</div>
  //          <div className="delimiter_line"></div>
  //        </div>
  //        <WorkersList
  //          sortId={sortId}
  //          list={workersList.filter(({ birthDate }) => new Date(birthDate).getMonth() < currentMonth)}
  //        />
  //      </>
  //    ) : (
  //      <WorkersList sortId={sortId} list={workersList} />
  //    );
  // )
  // : (
  //   <None
  //     text="Try another request"
  //     textMain="We didn't find anyone"
  //     img="../images/none.png"
  //   />
  // )
  //  }

  return (
    <ul>
      {list
        .sort((a, b) =>
          sortId === 'birthday'
            ? new Date(a.birthDate).getMonth() === new Date(b.birthDate).getMonth()
              ? new Date(a.birthDate).getDate() < new Date(b.birthDate).getDate()
              : new Date(a.birthDate).getMonth() > new Date(b.birthDate).getMonth()
            : a.name.toLowerCase() > b.name.toLowerCase(),
        )
        .map(({ id, name, position, birthDate, phone, avatar, tag, email }) => (
          <Link to={`/profile/${id}`}>
            <Worker
              sortId={sortId}
              id={id}
              name={name}
              position={position}
              birthDate={birthDate}
              phone={phone}
              avatar={avatar}
              tag={tag}
              email={email}
            />
          </Link>
        ))}
    </ul>
  );
};

export default WorkersList;
