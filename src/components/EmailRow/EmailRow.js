import React from 'react'
import './EmailRow.css'

import { useHistory } from 'react-router-dom'
import { Checkbox, IconButton } from '@material-ui/core'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'

const EmailRow = ({title , subject , description , time , id}) => {
  const history = useHistory();

  return (
    <div className='emailRow' onClick={() => history.push('/mail')}>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton><StarBorderOutlinedIcon /></IconButton>
        <IconButton><LabelImportantOutlinedIcon /></IconButton>
      </div>
      <h3 className='emailRow__title'>
        {title}
      </h3>
      <div className='emailRow__message'>
        <h4>{subject} {" "}
        <span className='emailRow__description'> - 
          {description}
        </span>
        </h4>
      </div>
      <p className='emailRow__time'>
        {time}
      </p>
    </div>
  )
}

export default EmailRow
