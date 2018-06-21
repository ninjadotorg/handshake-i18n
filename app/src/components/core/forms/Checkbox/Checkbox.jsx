import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    onRef: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    meta: PropTypes.object,
    checkError: PropTypes.bool,
    label: PropTypes.string.isRequired,
  }

  render() {
    const { name, meta, value, onRef, className, checkError, ...props } = this.props;

    let inRef = onRef || ((div) => this.inputRef = div);

    let errorClass = '';
    if (checkError && meta.error) {
      errorClass = 'input-error';
    }

    return (
      <label className="checkbox-label">
        <input
          {...props}
          className={`app-checkbox ${errorClass} ${className || ''}`}
          type='checkbox'
          name={name}
          value={value || ''}
          ref={inRef}
        />
        <span>{this.props.label}</span>
      </label>
    );
  }
}

export default Checkbox;
