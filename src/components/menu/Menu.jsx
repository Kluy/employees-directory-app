import React from 'react';
import { useState } from 'react';
import Workers from '../workers/Workers';
import './menu.scss';

const Menu = ({ activeItem, filter }) => {
  const menu = ['All', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

  // const [activeItem, setActiveItem] = useState('All');

  // const filter = e => {
  //   const newActiveItem = e.target.innerHTML;

  //   if (activeItem !== newActiveItem) setActiveItem(newActiveItem);
  // };

  return (
    <>
      <section className="menu">
        <ul onClick={filter} className="menu_list">
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
