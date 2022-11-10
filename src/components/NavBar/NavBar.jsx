// @ts-check
import {
    AppBar, Box, Button, Toolbar,
} from '@mui/material';
import React from "react";
import { styled } from '@mui/material/styles';
import Categories from './Categories';
import { Link } from "react-router-dom";


import Logo from "../images/Logo.png";
import CartWidget from "./CartWidget";


function NavBar() {

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

    return(
        <>  
        <AppBar className='NavBar' sx={{backgroundColor : "#000000"}} 
          position="fixed"
          
          >

          <Toolbar sx={{justifyContent: "space-between"}}>

            <Box>
              <StyledButton>
                <Link to={"/"}> 
                  <img style={{width: "7rem",}} src={Logo} alt="logo"/> 
                </Link>
              </StyledButton>
            </Box>

            <Box sx={{ display:"flex"}}>

              <Categories />
              <StyledButton>
                <Link to={"/cart"}>
                  <CartWidget />
                </Link>
              </StyledButton>
            </Box>
          </Toolbar>
        </AppBar>
    </>  
    )
} 
export default NavBar;

