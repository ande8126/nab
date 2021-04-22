import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchLetter( action ) {
    try {
        const response = yield axios.get('/api/letter', { params: { state: action.payload } });
        //target string with letter text
        yield put({ type: 'SET_LETTER', payload: response.data[0] });
    } catch (error) {
    console.log('Letter get request failed', error);
    }
}

function* letterSaga() {
    yield takeLatest('FETCH_LETTER', fetchLetter);
}

export default letterSaga;