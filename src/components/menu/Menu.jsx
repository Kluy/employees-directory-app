import React from 'react';
import classNames from 'classnames';
import './menu.scss';

const Menu = ({ activePosition, onFilter }) => {
  const menu = ['All', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

  return (
    <>
      <section className="menu">
        <ul onClick={onFilter} className="menu_list">
          {menu.map(position => (
            <li
              key={position}
              className={classNames('menu_list-item', {
                'menu_list-item--active': position === activePosition,
              })}
            >
              {position}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Menu;
