import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// component
import Image from '@/components/core/presentation/Image';
import loadingSVG from '@/assets/images/icon/loading.gif';
// style
import './Loading.scss';

class Loading extends React.PureComponent {
  CONFIG_DEFAULT = {
    className: '',
    message: '',
    loadingImg: loadingSVG,
  };

  render() {
    const { isLoading, configLoading } = this.props.app;
    if (!isLoading) return null;
    const { className, loadingImg, message } = Object.assign({}, this.CONFIG_DEFAULT, configLoading);
    return (
      <div className={`loading-full-screen ${className || ''}`}>
        <Image src={loadingImg} alt="loading" />
        {
          message && (<p className="text">{message}</p>)
        }
      </div>
    );
  }
}

Loading.propTypes = {
  app: PropTypes.object.isRequired,
};

export default connect(state => ({ app: state.app }))(Loading);
