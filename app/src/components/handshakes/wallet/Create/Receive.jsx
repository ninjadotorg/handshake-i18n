import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import history from '@/services/history';
import { URL } from '@/constants';
import ReceiveCoin from '@/components/Wallet/ReceiveCoin';

class Receive extends React.Component {
  render() {
    return (
      <ReceiveCoin onFinish={() => { this.props.history.goBack();} }/>
    );
  }
}

export default Receive;
