import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {
  render() {
    const {innerRef, ...props} = this.props;
    return (
      <img ref={innerRef} {...props} />
    );
  }
}

Image.propTypes = {
  innerRef: PropTypes.func // instead of ref
};

export default Image;
