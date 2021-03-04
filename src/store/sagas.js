import createSagaMiddleware from 'redux-saga';
import { all, takeLatest, call, put, } from 'redux-saga/effects';
import { getCurrencySuccess, getCurrencyFailure, GET_CURRENCY_REQUEST, } from './actions';
import {currencyService} from '../service/service';

export const sagaMiddleware = createSagaMiddleware();

function* watchCurrency() {
    yield takeLatest(GET_CURRENCY_REQUEST, requestGetCurrency);
}

function* requestGetCurrency() {
    try {
        const data = yield call(currencyService);
        const usdCurrency = data.find((item) => item.ccy === 'USD');
        yield put(getCurrencySuccess( usdCurrency && usdCurrency.sale ? usdCurrency.sale : undefined));
    } catch (e) {
        yield put(getCurrencyFailure());
    }
}

export function* rootSaga() {
    yield all([
        watchCurrency(),
    ]);
}
