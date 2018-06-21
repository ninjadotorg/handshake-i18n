import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TransferCoin from '@/components/Wallet/TransferCoin';
import history from '@/services/history';
import { URL } from '@/constants';

class Transfer extends React.Component {
  render() {
    return (
      // <TransferCoin coinName="BTC" toAddress = 'ABC' amount={0.01} onFinish={() => {}} />
      <TransferCoin onFinish={() => { this.props.history.goBack(); }} />
    );
  }
}

export default Transfer;
