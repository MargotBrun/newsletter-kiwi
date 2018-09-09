import React from 'react';
import { Link } from 'react-router-dom';
import './ShinyLink.css';

export default ({ ...props }) => {
  const { to } = props;
  if (to) {
    return <Link {...props} className="ShinyLink" />;
  }
  return <a {...props} className="ShinyLink" />;
};
