import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import DynamicImport from '@/components/App/DynamicImport';
import Loading from '@/components/core/presentation/Loading';
import { URL } from '@/constants';
import { setHeaderTitle, setHeaderCanBack } from '@/reducers/app/action';

const LandingPage = props => (<DynamicImport loading={Loading} load={() => import('@/pages/LandingPage/Trade')}>{Component => <Component {...props} />}</DynamicImport>);
const Page404 = props => (<DynamicImport isNotFound loading={Loading} load={() => import('@/pages/Error/Page404')}>{Component => <Component {...props} />}</DynamicImport>);

const routerMap = [
  { path: URL.LANDING_PAGE_TRADE, component: LandingPage },
];

class LandingPageRouter extends React.Component {
  static propTypes = {
    setHeaderTitle: PropTypes.func.isRequired,
    setHeaderCanBack: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props.setHeaderCanBack();
    this.props.setHeaderTitle('Landing Page');
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

export default connect(null, ({ setHeaderTitle, setHeaderCanBack }))(LandingPageRouter);

