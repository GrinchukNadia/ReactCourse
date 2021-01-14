import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
      <aside className={s.aside}>
        <ul>
          <li><NavLink activeClassName={s.active} to="/profile">Main</NavLink></li>
          <li><NavLink activeClassName={s.active} to="/chat">Chat</NavLink></li>
          <li><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
          <li><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
        </ul>
    </aside>
    )
}

export default Sidebar;