import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Button from '@/components/core/controls/Button';
import Feed from '@/components/core/presentation/Feed';

class FeedBettingEvent extends React.Component {
  static propTypes = {
    // children: PropTypes.any.isRequired,
    onFeedClick: PropTypes.func.isRequired,
  }

  // constructor(props) {
  //   super(props);
  //   // ...
  // }

  render() {
    return (
      <div>
        <Feed className="feed" onClick={this.props.onFeedClick}>
          <p className="description">{this.props.description}</p>
          <p className="email">{this.props.fromEmail}</p>
        </Feed>
        <Button block>Shake</Button>
      </div>
    );
  }
}

// const mapState = (state) => {
//   const { auth } = state;
//   return { auth };
// };

export default FeedBettingEvent;

// export default connect(mapState)(NewComponent);
