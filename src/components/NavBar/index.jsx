import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fade, Avatar } from '@mui/material';
import { useSelector } from 'react-redux'




const NavBar = ()  => {
  const navigate = useNavigate();
  const user = useSelector(state => state.userReducer.user)

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateLogin = () => {
    navigate('/login')
  }

  const navigateProfile = () => {
    navigate('/profile')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', mx: "auto"}}>
          <Typography variant="h3" component="div"  sx={{ mr: 4 }}>
            Immobills
          </Typography>
          <Button 
            color="inherit"
            id="fade-button"
            onClick={navigateLogin} 
            sx={{ border: 1, BorderColor: 'error.success' }} 
            className="login-button">
              Login
            </Button>
            <Avatar
            color="inherit"
            id="fade-button"
            onClick={handleClick}
            sx={{ border: 1, BorderColor: 'error.success' }}
            src='../../assets/images/img-avatar.jpg'
            >
          </Avatar>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={navigateProfile}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;