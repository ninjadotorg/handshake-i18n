import React from 'react';
import PropTypes from 'prop-types';

class BlankLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default BlankLayout;
