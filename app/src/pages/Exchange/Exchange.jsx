import React from 'react';
import {injectIntl} from 'react-intl';
import {formValueSelector} from 'redux-form';
import {connect} from 'react-redux';
import {URL} from '@/constants';
import './Exchange.scss';

import createForm from '@/components/core/form/createForm';
import {fieldCleave, fieldDropdown, fieldInput} from '@/components/core/form/customField';
import {required} from '@/components/core/form/validation';

import {API_URL} from '@/constants';
import FeedCreditCard from "@/components/handshakes/exchange/Feed/FeedCreditCard";

const nameFormCreditCard = 'creditCard';
const FormCreditCard = createForm({
  propsReduxForm: {
    form: nameFormCreditCard,
    initialValues: { currency: 'ETH' },
  },
});
const selectorFormCreditCard = formValueSelector(nameFormCreditCard);

class Exchange extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <FeedCreditCard />
          </div>
        </div>
      </div>
    );
    // return (
    //   <Grid>
    //     <Row>
    //       <Col xs={12}>
    //
    //       </Col>
    //     </Row>
    //   </Grid>
    // );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Exchange));
