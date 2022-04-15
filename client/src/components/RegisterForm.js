import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";




const RegisterForm = () => {

    const [ disabled, setDisabled ] = useState(true)
    const [ form, setForm ] = useState({
        username: '',
        email: '',
        pwd: '',
        pwdConfirm: '',
        pwdType: 'true',
    });
    const { username, email, pwd, pwdConfirm, pwdType } = form;

    useEffect( () => { 
        const missingFields = Object.values(form).some(key => key === '');
        missingFields ? setDisabled(true) : setDisabled(false);
    });

    const handleChange = (e, key) => {
        setForm({ ...form, [key]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    };
    
    return (
        <div className="register-form">
            <h1>Register</h1>
            <><br/></>
            <form onSubmit={onSubmit}>
                <TextField
                    name="username"
                    label="user name"
                    variant="standard"
                    value={username}
                    onChange={ (e) => handleChange(e, 'username') }
                    fullWidth
                    required
                    // errorText='Error msg'
                />
                <><br/><br/></>
                <TextField
                    name="email"
                    label="email"
                    variant="standard"
                    value={email}
                    onChange={ (e) => handleChange(e, 'email') }
                    fullWidth
                    required
                    // errorText='Error msg'
                />
                <><br/><br/></>
                <TextField
                    type={pwdType}
                    name="password"
                    label="password"
                    variant="standard"
                    value={pwd}
                    onChange={ (e) => handleChange(e, 'pwd') }
                    fullWidth
                    required
                    // errorText='Error msg'
                />
                <><br/><br/></>
                <TextField
                    type={pwdType}
                    name="pwconfirm"
                    label="confirm password"
                    variant="standard"
                    value={pwdConfirm}
                    onChange={ (e) => handleChange(e, 'pwdConfirm') }
                    fullWidth
                    required
                    // errorText='Error msg'
                />
                <><br/><br/><br/></>
                <Button
                    type="submit"
                    color='primary'
                    variant='contained'
                    disabled={disabled}
                    fullWidth
                >   Submit
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;