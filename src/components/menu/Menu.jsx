import React from 'react';
import { useState } from 'react';
import './menu.scss';

const Menu = () => {
  const menuItems = [
    { itemName: 'All', active: true },
    { itemName: 'Designers', active: false },
    { itemName: 'Analysts', active: false },
    { itemName: 'Manager', active: false },
    { itemName: 'iOS', active: false },
    { itemName: 'Android', active: false },
  ];
  const [active, setActive] = useState(menuItems);

  const filter = e => {
    const newActive = active.map(({ itemName, active }) => {
      e.target.innerHTML === itemName ? (active = true) : (active = false);
      return { itemName, active };
    });

    setActive(newActive);
  };

  return (
    <div className="menu">
      <ul onClick={filter} className="menu_list">
        {active.map(({ itemName, active }) => (
          <li
            key={itemName}
            className={active ? 'menu_list-item menu_list-item--active' : 'menu_list-item'}
          >
            {itemName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
