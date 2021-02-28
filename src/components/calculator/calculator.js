import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearCurrency, getCurrencyRequest} from '../../store/actions';
import {Formik} from 'formik';
import * as yup from 'yup';

import './calculator.css';

export default function Calculator () {
    const [amount, setAmount] = useState();

    const currency = useSelector((state) => state.currency);
    const dispatch = useDispatch();

    const validationsSchema = yup.object().shape({
      userAmount: yup.number().typeError('Должно быть целое число').required('Обязательно')
    });

    const getUserAmount = (arr) => {
      const amount = arr.userAmount ? parseInt(arr.userAmount) : undefined;
        setAmount(amount);
        if (!currency) {
          dispatch(getCurrencyRequest());
        }
    };

    const clearAmount = () => {
      if(currency !== undefined) {
        dispatch(clearCurrency());
        setAmount();
      }
    };

    const calculation = currency === undefined || amount === undefined ? null :
    (
        <span className="calcAmount">
            <strong>{amount} грн</strong> по курсу 
            <strong> {currency.slice(0,5)}$</strong> это 
            <strong> {(amount / currency).toFixed(2)}$</strong>
        </span>
    );
 
    return (
      <div className="calculator">
        <h2 className="calcTitel">Калькулятор</h2>

        <Formik
          initialValues={{
            userAmount: '',
          }}
          validateOnBlur
          onSubmit={(values) => {getUserAmount(values)}}
          validationSchema={validationsSchema}
          onChange={(values) => {console.log('onChange', values)}}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleSubmit,
            handleChange,
            handleBlur,
            dirty
          }) => (
            <form onSubmit={handleSubmit} className="form">
                <input 
                    className="calcInput"
                    type="number"
                    name="userAmount"
                    onChange={(e) => {handleChange(e); clearAmount()}}
                    onBlur={handleBlur}
                    value={values.userAmount || ''}
                    placeholder='Сумма, грн'>
                </input>
                {touched.userAmount && errors.userAmount ? <p className="error">{errors.userAmount}</p> : null}
                {calculation}
                <button 
                    className="calcBtn"
                    disabled={!isValid && !dirty}
                    // onClick={handleBlur}
                    type="submit">
                  Посчитать
                </button>
            </form>
          )}
        </Formik>
      </div>
    );
  };
