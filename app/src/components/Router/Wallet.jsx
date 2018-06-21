import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import DynamicImport from '@/components/App/DynamicImport';
import Loading from '@/components/core/presentation/Loading';
import { URL } from '@/constants';
import { setHeaderTitle, clearHeaderLeft, clearHeaderRight, showHeader } from '@/reducers/app/action';

const Wallet = props => (<DynamicImport loading={Loading} load={() => import('@/pages/Wallet/Wallet')}>{Component => <Component {...props} />}</DynamicImport>);
const Page404 = props => (<DynamicImport isNotFound loading={Loading} load={() => import('@/pages/Error/Page404')}>{Component => <Component {...props} />}</DynamicImport>);

const routerMap = [
  { path: URL.HANDSHAKE_WALLET_INDEX, component: Wallet },
];

class WalletRouter extends React.Component {
  static propTypes = {
    setHeaderTitle: PropTypes.func.isRequired,
    clearHeaderLeft: PropTypes.func.isRequired,
    clearHeaderRight: PropTypes.func.isRequired,
    showHeader: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.props.setHeaderTitle('My wallets');
    this.props.clearHeaderRight();
    this.props.clearHeaderLeft();
    this.props.showHeader();
  }

  render() {
    return (
      <Switch>
        {routerMap.map(route => <Route key={route.path} exact path={route.path} component={route.component} />)}
        <Page404 />
      </Switch>
    );
  }
}

export default connect(null, ({
  setHeaderTitle, clearHeaderRight, clearHeaderLeft, showHeader,
}))(WalletRouter);
