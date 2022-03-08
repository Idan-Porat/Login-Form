import React, { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className='form'>
            <input
                className='form__input'
                type="email"
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input
                className='form__input'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button
                type="submit"
                name='submit'
                className='form__submit-btn'>Submit</button>
        </form>
    )
}

export default Form;