import React from 'react';
import { Helmet } from 'react-helmet';
import './Page.css';

export default ({ title, children, className, ...props }) => (
  <div className={`Page ${className || ''}`} {...props}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <h1 className="Page_title">{title}</h1>
    <div className="Page_content">{children}</div>
  </div>
);
