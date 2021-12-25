import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton , Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import TuneIcon from '@material-ui/icons/Tune';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='' />

      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input placeholder='Search Mail' type='text' />
        <TuneIcon className="header__inputCaret" />
      </div>
      <div className='header__right'>
        <IconButton>
          <HelpOutlineRoundedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default Header
