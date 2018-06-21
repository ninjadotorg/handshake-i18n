import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import MainHeader from '@/components/Header/MainHeader';
import Navigation from '@/components/core/controls/Navigation/Navigation';
import Alert from '@/components/core/presentation/Alert';
import Loading from '@/components/core/controls/Loading';

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    location: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      app: this.props.app,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.app.showHeader !== prevState.app.showHeader) {
      return { app: nextProps.app };
    }
    return null;
  }

  render() {
    return (
      <div className={`app ${this.state.app.showHeader ? 'show-header' : 'hide-header'}`}>
        <MainHeader />
        <div className="content">
          {this.props.children}
        </div>
        <Navigation location={this.props.location} />
        <Alert />
        <Loading />
      </div>
    );
  }
}

export default connect(state => ({ app: state.app }))(MainLayout);
