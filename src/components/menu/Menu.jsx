import React from 'react';
import { useState } from 'react';
import Workers from '../workers/Workers';
import './menu.scss';

const Menu = () => {
  const menuItems = ['All', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

  const [activeItem, setActiveItem] = useState('All');

  const filter = e => {
    const newActiveItem = e.target.innerHTML;

    if (activeItem !== newActiveItem) setActiveItem(newActiveItem);
  };

  return (
    <>
      <section className="menu">
        <ul onClick={filter} className="menu_list">
          {menuItems.map(item => (
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
      <Workers activeItem={activeItem} />
    </>
  );
};

export default Menu;
