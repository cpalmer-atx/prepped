import styled from '@emotion/styled';
import { Paper, Grid } from '@mui/material';
import { Box, padding } from '@mui/system';
import '../App.css';


const Item = styled(Paper)( () => ({
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center'
}));

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
          <Item 
            xs={10} 
            elevation={24}
          >
              <h1>Reserved for Login Form what happens if this is long....</h1>
          </Item> 
      </Grid>
  );
}

export default Login;