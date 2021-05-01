import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchAllLetters() {
    try {
        const letters = yield axios.get( '/api/letter' );
        yield put( { type: 'SET_ALL_LETTERS', payload: letters.data } )
    } catch ( error ) {
        console.log( 'Letter get request failed', error );
    }
}

function* allLettersSaga() {
    yield takeLatest( 'FETCH_ALL_LETTERS', fetchAllLetters );
}

export default allLettersSaga;