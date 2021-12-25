import React from 'react'
import './EmailList.css'

import Section from '../Section/Section';
import { IconButton , Checkbox } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from '../EmailRow/EmailRow';

const EmailList = () => {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton><ArrowDropDownIcon /></IconButton>
          <IconButton><RefreshIcon /></IconButton>
          <IconButton><MoreVertTwoToneIcon /></IconButton>
        </div>

        <div className='emailList__settingsRight'>
          <IconButton><ChevronLeftIcon /></IconButton>
          <IconButton><ChevronRightIcon /></IconButton>
          <IconButton><KeyboardHideIcon /></IconButton>
        </div>
      </div>
        <div className='emailList__sections'>
          <Section Icon={InboxIcon} title='Primary' color='#D93025' selected />
          <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
          <Section Icon={LocalOfferIcon} title='Promotions' color='#188038' />
        </div>
        <div className='emailList__List'>
          <EmailRow 
          title='Twitch'
          subject='Hey There...'
          description='This is a test'
          time='10pm' />
        </div>
    </div>
  )
}

export default EmailList
