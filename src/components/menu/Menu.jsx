import React from 'react';
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
              className={
                position === activePosition
                  ? 'menu_list-item menu_list-item--active'
                  : 'menu_list-item'
              }
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
