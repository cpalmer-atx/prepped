import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { useEffect, useState } from "react";


const RegisterForm = () => {

    const [ disabled, setDisabled ] = useState(true)
    const [ form, setForm ] = useState({
        username: '',
        email: '',
        pwd: '',
        pwdConfirm: '',
        pwdType: 'password',
        pwdVisible: false
    });
    const { username, email, pwd, pwdConfirm, pwdType, pwdVisible } = form;

    useEffect( () => { 
        const missingFields = Object.values(form).some(key => key === '');
        missingFields ? setDisabled(true) : setDisabled(false);
    });

    const handleChange = (e, key) => {
        setForm({ ...form, [key]: e.target.value });
    };

    const setPwdVisible = (val) => {
        setForm({ 
            ...form, pwdVisible: val, pwdType: (val ? 'text' : 'password')
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    };
    
    return (
        <div className="register-form">
            <h1>Register</h1>
            <><br/></>
            <form onSubmit={onSubmit} >
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
                    InputProps={{
                        autoComplete: 'new-password',
                        endAdornment:(
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={ () => setPwdVisible(!pwdVisible) }
                            onMouseDown={(e) => e.preventDefault() }
                            edge="end"
                            >   {pwdVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
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
                    InputProps={{
                        autoComplete: 'new-password',
                        
                    }}
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