import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchRequests() {
  try {
    const response = yield axios.get('/api/requests');
    
    yield put({ type: 'SET_REQUESTS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* requestsSaga() {
  yield takeLatest('FETCH_REQUESTS', fetchRequests);
}

export default requestsSaga;
