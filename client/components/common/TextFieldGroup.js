import React, { PropTypes } from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, onBlur}) => (
  <div className={ classnames("form-group", { "has-error": error }) }>
    <label className="control-label">{label}</label>
    <input
      value={value}
      type={type}
      name={field}
      className="form-control"
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <span className="help-block">{error}</span>}
  </div>
);

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
