import styled from '@emotion/styled';
import { Paper, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import '../App.css';
import { useState } from 'react';


const Form = styled(Paper)( () => ({
    backgroundColor: '#fff',
    padding: 10,
    // width: 400,
    textAlign: 'center'
}));

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login request submitted!');
}

const handleMouseDown = (e) => {
    e.preventDefault();
}

const LoginForm = () => {
    const [ showPwd, setShowPwd ] = useState(false);

  return (
      
    <Form xs={10} elevation={24}>
        <Typography
            variant="h5"
            
            color="textSecondary"
            gutterBottom
        >   Sign In
        </Typography>
        <form onSubmit={handleSubmit} autoComplete='false'>
            <TextField
                name='email'
                label='Email'
                placeholder="email address"
                variant="outlined"
                type='text'
                // value={name}
                // onChange={handleSetName}
                // error={nameError}
                fullWidth
                required      
            />
            <TextField
                name='password'
                label='Password'
                placeholder="password"
                type={showPwd ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                required
                // value={name}
                // onChange={handleSetName}
                // error={nameError}
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () => setShowPwd(!showPwd) }
                        onMouseDown={handleMouseDown}
                        edge="end"
                        >   {showPwd ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <Button
                type="submit"
                color='primary'
                variant='contained'
                fullWidth
            >   Login
            </Button>
        </form>
    </Form> 
  );
}

export default LoginForm;