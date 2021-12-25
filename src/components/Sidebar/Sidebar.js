import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button className='sidebar__compose' >
        <img className='sidebar__image' src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' />
        Compose
        </Button>
        
        <SidebarOption Icon={InboxIcon} title='Inbox' />
    </div>
  )
}

export default Sidebar
