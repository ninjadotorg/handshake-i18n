import React from 'react';
import PropTypes from 'prop-types';

import Book from './../Book';

import "./GroupBook.scss";

class GroupBook extends React.Component {
  static propTypes = {
    bookList: PropTypes.array,
    amountColor: PropTypes.string,
  }
  static defaultProps = {
    amountColor: '#FA6B49',
  }


  constructor(props) {
    super(props);
  }

  render() {
    const {bookList, amountColor} = this.props;
    const isGotDefaultOutCome = typeof window !== 'undefined' && window.isGotDefaultOutCome;
    const hasData = bookList && bookList.length > 0;
    return (
      <div className={`wrapperGroupBook ${hasData ? '' : 'noData'}`}>
        {
          (hasData) ?
            bookList.map((item, index) => <Book key={index} amountColor={amountColor} item={item} />) :
            isGotDefaultOutCome ? <div>Stake a bet on new territory.</div> : ''
        }
      </div>
    );
  }
}

export default GroupBook;
