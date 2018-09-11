import React from 'react';
import './SubmitButton.css';

export default ({ isLoading, children }) => (
  <button className="SubmitButton" type="submit" disabled={isLoading}>
    <p className="SubmitButton_text">{children}</p>
  </button>
);
