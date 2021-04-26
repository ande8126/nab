import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// get all requests -- why not consistantly updating after PUT/DELETE/POST?
function* fetchRequests() {
  try {
    const response = yield axios.get('/api/requests');
    console.log( 'ahead of requests put:', response.data );
    yield put({ type: 'SET_REQUESTS', payload: response.data });
    console.log( 'after requests put:', response.data );
  } catch (error) {
    console.log('request get failed', error);
  }
}

function* requestsSaga() {
  yield takeLatest('FETCH_REQUESTS', fetchRequests);
}

export default requestsSaga;
