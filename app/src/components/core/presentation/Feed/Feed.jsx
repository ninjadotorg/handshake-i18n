import React from 'react';
import PropTypes from 'prop-types';
// style
import './Feed.scss';

class Feed extends React.PureComponent {
  BACKGROUND_COLORS = [
    'linear-gradient(-135deg, #FFA7E7 0%, #EA6362 100%)',
    'linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%)',
    'linear-gradient(-135deg, #23BCBA 0%, #45E994 100%)',
    'linear-gradient(-135deg, #FFDEA7 0%, #EA6362 100%)',
    'linear-gradient(-133deg, #9B3CB7 0%, #FF396F 100%)',
    'linear-gradient(-133deg, #004B91 0%, #78CC37 100%)',
    'linear-gradient(-135deg, #38B8F2 0%, #843CF6 100%)',
    'linear-gradient(-135deg, #E35C67 0%, #381CE2 100%)',
    'linear-gradient(-135deg, #EFBFD5 0%, #9D61FD 100%)',
    'linear-gradient(-135deg, #45E0A7 0%, #D5E969 100%)',
    'linear-gradient(45deg, #FBC79A 0%, #D73E68 100%)',
    'linear-gradient(45deg, #F6AB3E 0%, #8137F7 100%)',
  ];

  backgroundCss(background) {
    return background ? background : this.BACKGROUND_COLORS[Math.floor(Math.random() * this.BACKGROUND_COLORS.length)];
  }

  render() {
    const { className, background, children, handshakeId, ...props } = this.props;
    const styleCss = {
      background: this.backgroundCss(background)
    };
    return (
      <div className={`feed ${className || ''}`} style={styleCss} {...props}>
        {children}
      </div>
    );
  }
}

Feed.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Feed;
