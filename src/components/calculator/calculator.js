import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

import './calculator.css';

function Calculator () {
    const [amount, setAmount] = useState(undefined);

    const validationsSchema = yup.object().shape({
      name: yup.number().typeError('Должно быть целое число').required('Обязательно')
    })

    const onChange = (e) => {
        setAmount(e.target.value)
        console.log(amount);
    }

    return (
      <div className="calculator">
        <h2 className="calcTitel">Калькулятор</h2>

        <Formik
          initialValues={{
            name: '',
          }}
          validateOnBlur
          onSubmit={(values) => {console.log(values)}}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            // handleSubmit,
            // handleChange,
            handleBlur,
            dirty
          }) => (
            <div className="form">
                <input 
                    className="calcInput"
                    type="text"
                    name="name"
                    onChange={onChange}
                    onBlur={handleBlur}
                    values={values.name}
                    placeholder='2000 грн'>
                </input>
                {touched.name && errors.name ? <p className="error">{errors.name}</p> : null}
                <button 
                    className="calcBtn"
                    disabled={!isValid && !dirty}
                    onClick={handleBlur}
                    type="submit"
                >Посчитать</button>
            </div>
          )}
        </Formik>

          
      </div>
    );
  }

export default Calculator;