import React from 'react';
import { NavLink } from 'react-router-dom';
import BlockFriends from './BlockFriends/BlockFriends';
import s from './Sidebar.module.css';



const Sidebar = (props) => {

  

    return (
      <aside className={s.aside}>
        <ul>
          <li><NavLink activeClassName={s.active} to="/profile">Main</NavLink></li>
          <li><NavLink activeClassName={s.active} to="/chat">Chat</NavLink></li>
          <li><NavLink activeClassName={s.active} to="/news">Users</NavLink></li>
          <li><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
        </ul>
        <BlockFriends chat={props.chat}/>
        
    </aside>
    )
}

export default Sidebar;