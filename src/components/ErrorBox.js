import React from 'react';
import '../components/componentStylesheets/ErrorBox.css'

const ErrorBox = ({value}) => {
  return (
    <>
      <div className='errBox'>{value}</div>
    </>
  )
}

export default ErrorBox;