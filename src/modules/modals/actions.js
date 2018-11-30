import { MODAL_CLOSE, MODAL_OPEN, MODAL_OPEN_CONFIRMATION } from './constants';

export function openModal(modalType, modalName, modalProps) {
  return {
    type: MODAL_OPEN,
    payload: { modalType, modalName, modalProps },
  };
}

export function closeModal() {
  return {
    type: MODAL_CLOSE,
  };
}

export function openModalConfirmation(modalName, modalProps) {
  return openModal(MODAL_OPEN_CONFIRMATION, modalName, modalProps);
}
