import React from 'react'
import './EmailRow.css'

import { Checkbox, IconButton } from '@material-ui/core'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'

const EmailRow = ({title , subject , description , time , id}) => {
  return (
    <div className='emailRow'>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton><StarBorderOutlinedIcon /></IconButton>
        <IconButton><LabelImportantOutlinedIcon /></IconButton>
      </div>
      <h3 className='emailRow__title'>
        {title}
      </h3>
      <div className='emailRow__message'>
        <h4>{subject}</h4>
        <span className='emailRow__description'>
          {description}
        </span>
      </div>
      <div className='emailRow__description'>
        {time}
      </div>
    </div>
  )
}

export default EmailRow
