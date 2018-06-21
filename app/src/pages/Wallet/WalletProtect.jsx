import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Wallet.scss';

import Button from '@/components/core/controls/Button';
import Checkbox from '@/components/core/forms/Checkbox/Checkbox';
import Modal from '@/components/core/controls/Modal';
import ModalDialog from '@/components/core/controls/ModalDialog';
import { differenceWith } from 'lodash';

class WalletProtect extends React.Component {
	constructor(props) {

    super(props);
    this.state = {
      step1_confirm: false,
      step: this.props.step,
      arr_random: [],
      arr_confirm: [],
      active: this.props.active
    };
  }

	async componentDidmount() {

	}

  componentWillReceiveProps() {
    if (!this.props.active)
      this.setState({step1_confirm: false, step: this.props.step, arr_confirm: []});
  }

  get showStep1() {
    return this.state.step == 1 ?
    (
      <div className="protectwallet-wrapper" >
          <div className="msg1">
          This passphrase will allow you to recover your funds if your phone is ever lost or stolen.
          </div>
          <div className="msg2">
          Please make sure nobody has access to your passphrase. You can use a password manager or write it down and hide it under your mattress.
          </div>
          <div className="msg3">
            <Checkbox name="checkBoxProtected" label="I understand that if I lose my passphrase, I lose access to my account."
              checked={this.state.step1_confirm}
              onClick={() => { this.setState({step1_confirm: !this.state.step1_confirm}); }} />
          </div>
          <Button className="button-wallet" block disabled={!this.state.step1_confirm} type="submit" onClick={this.doStep1}>Continue</Button>
        </div>
    )
    : "";
  }

  get showStep2() {
    const {wallet, onCopy} = this.props;
    let arr_phrase  = wallet && wallet.mnemonic ? wallet.mnemonic.split(' ') : [];
    return this.state.step == 2 ?
    (
      <div className="protectwallet-wrapper" >
          <div className="msg1">
            Record these words carefully. Don't email it or screenshot it.
          </div>
          <div className="pass_phrase">
            {/* fill pass phrase */}
            {arr_phrase.map((str) => {
              return <div key={str} className="btn cursor-initial bg-light">{str}</div>
            })}
          </div>
          <div onClick={onCopy} className="pass-phrase-link-copy">Copy to clipboard</div>
          <Button className="button-wallet" block type="submit" onClick={this.doStep2}>Verify your passsphrase</Button>
        </div>
    )
    : "";
  }

  get showStep3() {

    return this.state.step == 3 ?
    (
      <div className="protectwallet-wrapper" >
          <div className="msg1">
          Tap to put these words in the correct order.
          </div>
          <div className="confirm_pass_phrase">
            {this.state.arr_confirm.map((str) => {
              return <div key={str}  className="btn btn-light" onClick={() => this.pickPassPhrase(str, false)}>{str}</div>
            })}
          </div>
          <div className="pass_phrase">
            {/* fill pass phrase */}
            {this.state.arr_random.map((str) => {
              return <div key={str}  className="btn btn-light" onClick={() => this.pickPassPhrase(str, true)}>{str}</div>
            })}
          </div>
          <Button className="button-wallet" block type="submit" onClick={this.doStep3} >Verify your passsphrase</Button>
        </div>
    )
    : "";
  }

  arraySortRandom(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  pickPassPhrase = (phrase, isPick) => {
    let arr1 = [], arr2 = [];
    if(isPick){
      arr1 = this.state.arr_confirm;
      arr2 = this.state.arr_random;
    }
    else{// for undo
      arr1 = this.state.arr_random;
      arr2 = this.state.arr_confirm;
    }

    arr1.push(phrase);//add to array 1

    let index = arr2.indexOf(phrase);
    if (index > -1) {
      arr2.splice(index, 1);
    }// remove from array 2

    if(isPick){
      this.setState({arr_confirm: arr1, arr_random: arr2});
    }
    else{// for undo
      this.setState({arr_confirm: arr2, arr_random: arr1});
    }
  }

  doStep1 = () => {
    this.setState({arr_confirm: [], step: 2});
  }

  doStep2 = () => {
    const {wallet} = this.props;
    let arr_phrase = wallet && wallet.mnemonic ? wallet.mnemonic.split(' ') : [], arr_random = [];
    if(arr_phrase.length > 0){
      arr_random = this.arraySortRandom(arr_phrase);
    }

    this.setState({arr_random: arr_random, arr_confirm: [], step: 3});
  }

  tryDoStep3 = () => {
    this.doStep2(); //reuse step2
    this.modalConfirmRef.close();
  }

  doStep3 = () => {
    const {wallet} = this.props;
    let arr_confirm = this.state.arr_confirm, arr_phrase = wallet && wallet.mnemonic ? wallet.mnemonic.split(' ') : [], arr_random = [];
    let bMatch = true, i = 0;

    while(bMatch && i < arr_phrase.length){
      bMatch = arr_confirm[i] ==  arr_phrase[i];
      i++;
    }


    if(bMatch){
      this.setState({step1_confirm: false, step: 1, arr_confirm: [], arr_random: []});

      //callback close form
      const { callbackSuccess } = this.props;

      if (callbackSuccess) {
        callbackSuccess();
      }
    }
    else{
      this.modalConfirmRef.open();
    }
  }


	render(){

		return (
      <div>
        {this.showStep1}
        {this.showStep2}
        {this.showStep3}
        <ModalDialog title="Try again" onRef={modal => this.modalConfirmRef = modal}>
          <div className="wrong-pass-phrase">These words are in the wrong order. Please try again.</div>
          <div className="text-center p-3 ">
            <button className="btn-block btn btn-secondary p-2" onClick={this.tryDoStep3} >OK</button>
          </div>
        </ModalDialog>
      </div>
		);
	}
}

WalletProtect.propTypes = {
  wallet: PropTypes.any,
  step: PropTypes.any,
  active: PropTypes.bool,
  onCopy: PropTypes.func
};

const mapState = (state) => ({

});

const mapDispatch = ({
});

export default connect(mapState, mapDispatch)(WalletProtect);
