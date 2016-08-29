import React, { PropTypes } from 'react'

const BooleanIcon = ({
  checked
}) => {
  return checked ? <i className="fa fa-check" style={{color: 'green'}}/> : <i className="fa fa-close" style={{color: 'red'}}/>
}

export default BooleanIcon
