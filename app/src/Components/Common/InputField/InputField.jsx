import React from 'react'
import PropTypes from 'prop-types';
import '../InputField/style.css'

export const InputField = ({ type, placeholder, value, onChange, icon, className }) => {
  return (
    <div className={`input ${className || ''}`}>
      {icon && <img src={icon} alt={placeholder} className="icon" />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};
