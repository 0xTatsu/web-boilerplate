/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { openModal, closeModal } from './actions';

const actions = { openModal, closeModal };

class TestModal extends Component {
  onNextModalClick = () => {
    const { counter } = this.props;
    this.props.openModal('TestModal', { counter: counter + 1 });
  }

  render() {
    const { counter, closeModal } = this.props;

    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
      >

        <h2>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    );
  }
}


export default connect(null, actions)(TestModal);
