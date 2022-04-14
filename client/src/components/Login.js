import { Grid } from '@mui/material';
import LoginForm from './LoginForm';
import '../App.css';


const Login = () => {
  return (
      <Grid
        container
        spacing={0}
        padding={5}
        direction='column'
        alignItems='center'
        justifyContent="center"
        style={{ minHeight: '90vh'}}
      >
          <LoginForm />
      </Grid>
  );
}

export default Login;