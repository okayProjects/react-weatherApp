import React from 'react';
import style from './Form.module.css';

const From = props => {
    return (
        <form className={style.Form}>
            <input className={style.Input} onChange={props.inputChange} type='text' value={props.inputValue} placeholder='Type in the city' />
        </form>

        // <form className={style.Form} onSubmit={props.citySubmit}>
        //     <input className={style.Input} onChange={props.inputChange} type='text' value={props.inputValue} placeholder='Type in the city' />
        //     <button className={style.Button}>Search your city</button>
        // </form>
    );
}

export default From;