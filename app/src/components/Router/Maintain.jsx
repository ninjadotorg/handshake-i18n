import React from 'react';
import Button from '@/components/core/controls/Button';
import { Row, Grid, Col } from 'react-bootstrap';
import nodataNinjaSVG from '@/assets/images/ninja/nodata-ninja.svg';

class NetworkError extends React.PureComponent {
  reload() {
    window.location.reload();
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="network-error text-center">
              <img className="img-fluid img" src={nodataNinjaSVG} alt="noconnection ninja" />
              <p>We are maintaining</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NetworkError;
