import createSagaMiddleware from 'redux-saga';
import { all, takeLatest, call, put, } from 'redux-saga/effects';
import { getCurrencySuccess, getCurrencyFailure, GET_CURRENCY_REQUEST, } from './actions';
import CurrencyService from '../services/services';

export const sagaMiddleware = createSagaMiddleware();
export const currencyRate = new CurrencyService();

export function* watchCurrency() {
    yield takeLatest(GET_CURRENCY_REQUEST, requestGetCurrency);
}

export function* requestGetCurrency() {
    try {
        const data = yield call(getCurrency);
        const usdCurrency = data.find((item) => item.ccy === 'USD');

        yield put(getCurrencySuccess( usdCurrency && usdCurrency.sale ? usdCurrency.sale : undefined));
    } catch (e) {
        yield put(getCurrencyFailure());
    }
}

export  async function getCurrency() {
    return await (currencyRate.getCurrenceRate()
        .then((rec) => {
            return (rec);
        })
    )
}

export function* rootSaga() {
    yield all([
        watchCurrency(),
    ]);
}
