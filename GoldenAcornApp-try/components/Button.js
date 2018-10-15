import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, clickListener, id }) => (
  <button type="button" onClick={clickListener} id={id}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clickListener: PropTypes.func.isRequired,
};

export default Button;
