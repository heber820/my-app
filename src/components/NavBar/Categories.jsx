import React, { useState } from 'react'; 
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

export default function Categories() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#272727',
      borderColor: '#94ff8f',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#272727',
      borderColor: '#94ff8f',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,22,21,.2)',
    },
  });

  return (
    <div>
      <Box>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{color: "#94ff8f", bgcolor: "#000"}}
      >
        Categorías
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> 
          <StyledButton
              sx={{
                backgroundColor: "#000", 
                color: "#fff",
              }}
              variant='contained'
              startIcon={<BrunchDiningIcon />}
              onClick={handleClose}
              > 
              <Link 
                  style={{
                    textDecoration: "none", 
                    color: "#94ff8f"
                  }} 
                  to="/category/lomos"
                  >
                  <Typography> 
                  Lomos 
                  </Typography>
              </Link>
          </StyledButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <StyledButton
              sx={{
                backgroundColor: "#000", 
                color: "#fff",
              }}
              variant='contained'
              onClick={handleClose}
              startIcon={<LocalPizzaIcon />}
              > 
              <Link 
              style={{
                textDecoration: "none", 
                color: "#94ff8f"
              }} 
              to="/category/pizzas"
              >
                  <Typography> 
                  Pizzas
                  </Typography>
              </Link>
          </StyledButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <StyledButton
          sx={{
            backgroundColor: "#000",
            color: "#fff",
          }}
          variant='contained'
          onClick={handleClose}
          startIcon={<LunchDiningIcon />}
          > 
          <Link 
              style={{
                textDecoration: "none", 
                color: "#94ff8f",
                
              }} 
              to="/category/hamburguesas">
              <Typography> 
              Burguers 
              </Typography>
          </Link>
          </StyledButton> 
        </MenuItem>
      </Menu>
    </Box>
    </div>
  );
}
