import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* toggleResponse( action ) {
  try {
    yield axios.put( '/api/requests/' + action.payload );
    yield put({ type: 'FETCH_REQUESTS' } );
  } catch (error) {
    console.log('Response PUT request failed', error);
  }
}

function* responseSaga() {
  yield takeLatest( 'HAVE_RESPONSE', toggleResponse );
}

export default responseSaga;
