import { Grid } from '@mui/material';
import RegisterForm from './RegisterForm'
import '../App.css';

const Register = () => {

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
            <RegisterForm />
        </Grid>
    );
}

export default Register;