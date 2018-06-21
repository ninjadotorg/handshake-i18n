import React from 'react';
import PropTypes from 'prop-types';

class Radio extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onRef: PropTypes.func,
    className: PropTypes.string,
    meta: PropTypes.object,
    checkError: PropTypes.bool,
    type: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
  }

  render() {
    const { type, name, meta, onRef, className, checkError, list, ...props } = this.props;

    let inRef = onRef || ((div) => this.inputRef = div);

    let errorClass = '';
    if (checkError && meta.error) {
      errorClass = 'input-error';
    }

    return (
      <div className={`radio-container ${type} ${errorClass} ${className || ''}`}>
        {list.map((radio, index) => (
          <div className="radio" key={index}>
            <label className="radio-label">
              <input {...props} type="radio" value={radio.toUpperCase()} name={name} ref={inRef}/> {radio}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Radio;
