import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Button, Divider, IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import PersonIcon from '@material-ui/icons/Person';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button className='sidebar__compose' >
        <img className='sidebar__image' src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' />
        Compose
      </Button>

      <div className='sidebar__items'>
      <SidebarOption Icon={InboxIcon} title='Inbox' number={36} selected={true} />
      <SidebarOption Icon={StarIcon} title='Starred' number={20} />
      <SidebarOption Icon={AccessTimeIcon} title='Soonzed' number={20} />
      <SidebarOption Icon={NearMeIcon} title='Sent' number={20} />
      <SidebarOption Icon={NoteIcon} title='Drafts' number={20} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={20} />
      <Divider />

      </div>
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PhoneIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PersonIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
