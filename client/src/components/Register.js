import { Button, Container, InputLabel, TextField, Typography, IconButton, OutlinedInput, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { useState } from 'react';
import '../App.css';

const Register = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ showPwd, setShowPwd ] = useState(false);
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ pwdError, setPwdError ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('submitted!');
    }

    const handleSetEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handleSetName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
    }

  return (
    <Container>
        <Typography
            className="register-form"
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Register
        </Typography>
        
        <form onSubmit={handleSubmit}>
            <TextField
                name='username'
                label='Name'
                placeholder="user name"
                value={name}
                onChange={handleSetName}
                variant="outlined"
                error={nameError}
                fullWidth
                required
                
            />
            <TextField
                autoComplete='false'
                name='email'
                label='Email'
                placeholder="email"
                value={email}
                onChange={handleSetEmail}
                variant="outlined"
                fullWidth
                required
                
            />
            {/* <TextField
                name='password'
                label='Password'
                type='password'
                placeholder="password"
                value={pwd}
                onChange={ (e) => setPwd(e.target.value) }
                hidden='true'
                variant="outlined"
                fullWidth
                required
                
            /> */}
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                placeholder='Password'
                required
                fullWidth
                type={showPwd ? 'text' : 'password'}
                value={pwd}
                onChange={ (e) => setPwd(e.target.value) }
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () => setShowPwd(!showPwd) }
                        onMouseDown={handleMouseDown}
                        edge="end"
                        >
                        {showPwd ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
            />

            <Button
                type="submit"
                color='secondary'
                variant='contained'
                
            >
                Submit
            </Button>
        </form>
      
    </Container>
  );
}

export default Register;