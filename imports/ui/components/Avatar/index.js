import React, { PropTypes } from 'react'
import { Image } from 'react-bootstrap'

const Avatar = ({
  logoUrl
}) => (
  <Image src={logoUrl} style={{width: '40px', height: '40px'}} />
)

export default Avatar
