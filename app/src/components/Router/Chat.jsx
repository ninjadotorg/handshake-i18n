import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import DynamicImport from '@/components/App/DynamicImport';
import Loading from '@/components/core/presentation/Loading';
import { URL } from '@/constants';
import { setHeaderTitle, clearHeaderRight, clearHeaderLeft, showHeader } from '@/reducers/app/action';

const Chat = props => (<DynamicImport loading={Loading} load={() => import('@/pages/Chat/Chat')}>{Component => <Component {...props} />}</DynamicImport>);
const Page404 = props => (<DynamicImport isNotFound loading={Loading} load={() => import('@/pages/Error/Page404')}>{Component => <Component {...props} />}</DynamicImport>);

const routerMap = [
  { path: URL.HANDSHAKE_CHAT_INDEX, component: Chat },
  { path: URL.HANDSHAKE_CHAT_DETAIL, component: Chat },
];

class ChatRouter extends React.Component {
  static propTypes = {
    setHeaderTitle: PropTypes.func.isRequired,
    clearHeaderRight: PropTypes.func.isRequired,
    clearHeaderLeft: PropTypes.func.isRequired,
    showHeader: PropTypes.func.isRequired,

  }

  constructor(props) {
    super(props);

    this.props.setHeaderTitle('Whisper');
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
}))(ChatRouter);
