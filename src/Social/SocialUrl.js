import React, { Component } from 'react';
import s from './SocialUrl.module.css'

const SocialUrl = ({ url, icon }) => {
  return (
    <a href={url} target="_blank">
      <img src={icon} />
    </a>
  )
}


export default SocialUrl;