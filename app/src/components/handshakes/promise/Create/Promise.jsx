import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@/components/core/controls/Button';
import './Promise.scss';

class Promise extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { auth: this.props.auth };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.updatedAt !== prevState.auth.updatedAt) {
      return { auth: nextProps.auth };
    }
    return null;
  }

  init() {

  }

  render() {
    return (
      <div>
        <div className="promise-container">
          <div>
            <span className="hidden" id="s-promise">{this.state.auth.profile.username}</span>
            <input type="text" name="s-promise" placeholder={this.state.auth.profile.username} />
          </div>
          <div>
            <strong>promises </strong><span className="hidden" id="o-promise" />
            <input type="text" name="o-promise" />
          </div>
          <div>
            <strong>to </strong><span className="hidden" id="do-promise" />
            <input type="text" name="do-promise" />

          </div>
        </div>
        <Button block onClick={this.init}>Sign &amp; send</Button>
      </div>
    );
  }
}

export default connect(state => ({ auth: state.auth }))(Promise);
