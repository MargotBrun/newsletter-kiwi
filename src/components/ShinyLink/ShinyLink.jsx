import React from 'react';
import { Link } from 'react-router-dom';
import './ShinyLink.css';

export default ({ ...props }) => {
  const { to, multicolor } = props;
  const className = `ShinyLink ${multicolor ? '-multicolor' : ''}`;
  if (to) {
    return <Link {...props} className={className} />;
  }
  // eslint-disable-next-line
  return <a {...props} className={className} />;
};
