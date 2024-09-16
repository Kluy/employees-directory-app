import React from 'react';
import './profile.scss';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile_header">
        <div>back</div>
        <img className="worker_avatar worker_avatar--big" src="images/icon.png" alt="" />
        <div className="name">name</div>
        <div className="worker_position">job</div>
      </div>
      <div className="profile_data">
        <div>
          <img src="images/star.svg" alt="" />
          <div className="birthdate">date</div>
          <div className="age">years</div>
        </div>
        <div>
          <img src="images/phone.svg" alt="" />
          <div className="phone">phone</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
