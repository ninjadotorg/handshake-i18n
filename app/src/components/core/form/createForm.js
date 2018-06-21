import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

const Form = (props) => {
  const { handleSubmit, children, className } = props;
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.any.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};


export default ({ propsReduxForm }) => reduxForm(propsReduxForm)(Form);
