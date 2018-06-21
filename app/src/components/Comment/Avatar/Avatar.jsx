import React from 'react';
import PropTypes from 'prop-types';

// style
import avatarPlaceHolder from '@/assets/images/icon/avatar.svg';
import './Avatar.scss';

class Avatar extends React.PureComponent {

  render() {
    const { src, ...newProps } = this.props;
    return <img className="img-circle img-responsive avatar" src={src || avatarPlaceHolder} {...newProps} />;
  }
}

export default Avatar;
