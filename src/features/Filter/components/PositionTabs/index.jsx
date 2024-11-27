import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';

const PositionTabs = ({ activePosition, onFilter }) => {
  const menu = ['All', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

  return (
    <>
      <section className="menu">
        <ul onClick={onFilter} className="menu__list">
          {menu.map(position => (
            <li
              key={position}
              className={classNames('menu__list-item', {
                'menu__list-item_active': position === activePosition,
              })}
            >
              {position}
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default PositionTabs;
