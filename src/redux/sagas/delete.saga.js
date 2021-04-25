import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* deleteRequest( action ) {
  try {
    yield axios.delete( '/api/requests/' + action.payload );
  } catch (error) {
    console.log('Request DELETE failed', error);
  }
}

function* deleteSaga() {
  yield takeLatest( 'DELETE_REQUEST', deleteRequest );
}

export default deleteSaga;
