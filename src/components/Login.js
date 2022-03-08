import React, { useState } from "react";

const Login = (props) => {

    const { handleLogin } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validPassword = (newPassword) => {
        if (newPassword.search(/[A-Z]/i) < 0) {
            alert("Your password must contain at least one letter.");
            return false;
        }
        if (newPassword.search(/[0-9]/i) < 0) {
            alert("Your password must contain at least one digit.");
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validPassword(password)) {
            handleLogin(email, password);
        }
    }

    return (
        <div className="Login">
            <form className='form' onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <h1 className="form__header">Log in</h1>
                <input
                    className='form__input'
                    type="email"
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => {
                        let value = e.target.value;
                        value = value.replace(/[^A-Za-z0-9@.!#$%&'*+/=?^_`{|}~-]/gi, "");
                        setEmail(value)
                    }} />
                <input
                    className='form__input'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => {
                        let value = e.target.value;
                        value = value.replace(/[^A-Za-z0-9@.!#$%&'*+/=?^_`{|}~-]/gi, "");
                        setPassword(value)
                    }} />
                <button
                    className='form__submit-btn'
                    type="submit"
                    aria-label="sumbit button"
                >Submit</button>
            </form>
        </div>
    )
}

export default Login;