import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* sendRequest( action ) {
  try {
    yield axios.post('/api/requests', action.payload );
    console.log( 'in sendRequest saga' );
  } catch (error) {
    console.log('request POST failed', error);
  }
}

function* sendRequestSaga() {
  yield takeLatest('SEND_REQUEST', sendRequest);
}

export default sendRequestSaga;
