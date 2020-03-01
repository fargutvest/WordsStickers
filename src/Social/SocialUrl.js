import React, { Component } from 'react';

const SocialUrl = ({ url, icon }) => {
  return (
    <a href={url}>
      <img src={icon} />
    </a>
  )
}


export default SocialUrl;