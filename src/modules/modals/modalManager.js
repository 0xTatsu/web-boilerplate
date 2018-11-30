import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestModal from './confirmation';

const modalList = {
  TestModal,
};

class ModalManager extends Component {
  render() {
    const { currentModals } = this.props;
    return currentModals.map((modal) => {
      const { modalType, modalName, modalProps = {} } = modal;
      const ModalComponent = modalList[modalType];

      return <ModalComponent {...modalProps} modalName={modalName} key={modalName} />;
    });
  }
}

export default connect(
  (state) => ({
    currentModals: state.modals,
  }),
)(ModalManager);
