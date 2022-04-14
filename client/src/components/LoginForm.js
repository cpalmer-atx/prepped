import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import '../App.css';


const Form = styled(Paper)( () => ({
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center'
}));

const LoginForm = () => {
  return (
      
    <Form 
    xs={10} 
    elevation={24}
    >
        <h1>Login Form</h1>
    </Form> 
  );
}

export default LoginForm;