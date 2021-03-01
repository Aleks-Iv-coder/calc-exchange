import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import {object, number} from 'yup';
import {clearCurrency, getCurrencyRequest} from '../../store/actions';
import {Spinner} from '../spinner/spinner';
import './calculator.css';

export function Calculator () {
    const [amount, setAmount] = useState();

    const currency = useSelector((state) => state.currency);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    const validationsSchema = object().shape({
      userAmount: number().typeError('Должно быть целое число').required('Обязательно')
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
        <span className='calc-amount'>
            <strong>{amount} грн</strong> по курсу 
            <strong> {currency.slice(0,5)}$</strong> это 
            <strong> {(amount / currency).toFixed(2)}$</strong>
        </span>
    );
 
    return (
      <div className='calculator'>
        {loading ? <Spinner /> : null}
        <h2 className='calc-titel'>Калькулятор</h2>

        <Formik
          initialValues={{
            userAmount: '',
          }}
          validateOnBlur
          onSubmit={(values) => {getUserAmount(values)}}
          validationSchema={validationsSchema}>
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
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    className='calc-input'
                    type='text'
                    name='userAmount'
                    onChange={(e) => {handleChange(e); clearAmount()}}
                    onBlur={handleBlur}
                    value={values.userAmount || ''}
                    placeholder='Сумма, грн'>
                </input>
                {touched.userAmount && errors.userAmount ? <span className='error'>{errors.userAmount}</span> : null}
                {calculation}
                <button 
                    className='calc-btn'
                    disabled={!isValid && !dirty}
                    // onClick={handleBlur}
                    type='submit'>
                  Посчитать
                </button>
            </form>
          )}
        </Formik>
      </div>
    );
  };
