import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';




const NavBar = ()  => {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', mx: "auto"}}>
          <Typography variant="h3" component="div"  sx={{ mr: 4 }}>
            Immobills
          </Typography>
          <Button color="inherit" onClick={handleClick} sx={{ border: 1, BorderColor: 'error.success' }} className="login-button">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;