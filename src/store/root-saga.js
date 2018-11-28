/* eslint-disable no-constant-condition,func-names */
import { takeEvery, spawn, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { apiGet, apiPost } from '@/store/api-saga';

function* testSaga() {
  yield takeEvery('INIT_SAGA', function* () {
    const data = yield call(apiGet, {
      pathUrl: 'https://reqres.in/api/users?delay=3',
      type: 'test_api',
    });
    console.log('data', data);
    console.info('init');
  });
}
// eslint-disable-next-line
function* rootSagaRestartable() {
  const sagaList = [testSaga];

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
  yield spawn(testSaga);
}
