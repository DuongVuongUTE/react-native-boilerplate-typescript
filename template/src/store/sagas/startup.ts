import {incrementByAmount} from '@store/slice/startup';
import {takeLatest} from 'redux-saga/effects';

function* handleIncrement() {}

const startupSaga = [takeLatest(incrementByAmount.type, handleIncrement)];

export default startupSaga;
