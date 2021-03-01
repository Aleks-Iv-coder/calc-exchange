import React from 'react';
import './spinner.scss';


export function  Spinner () {
    return (
            <div className='spinner-wrapper'>
                <div className='spinner'>
                    <div className='spinner-content'>
                        <div></div>
                        <div></div>
                        <div><div></div></div>
                        <div><div></div></div>
                    </div>
                </div>
            </div>
    )
}
