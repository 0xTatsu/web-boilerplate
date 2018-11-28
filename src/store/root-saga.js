/* eslint-disable no-constant-condition,func-names */
import { spawn, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import loanSaga from '@/pages/loan/saga';

// eslint-disable-next-line
function* rootSagaRestartable() {
  const sagaList = [];

  yield sagaList.map(saga => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        console.error('Unexpected root saga termination!');
      } catch (e) {
        console.error('[Error] The saga will be restarted \n', e);
      }
      yield delay(3000);
    }
  }));
}

export default function* rootSaga() {
  yield spawn(loanSaga);
}
