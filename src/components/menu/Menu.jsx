import React from 'react';
import './menu.scss';

const Menu = ({ activeItem, onFilter }) => {
  const menu = ['All', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

  return (
    <>
      <section className="menu">
        <ul onClick={onFilter} className="menu_list">
          {menu.map(item => (
            <li
              key={item}
              className={
                item === activeItem ? 'menu_list-item menu_list-item--active' : 'menu_list-item'
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Menu;
