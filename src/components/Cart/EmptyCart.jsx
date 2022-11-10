import React from 'react'
import {Typography, Box, Button }  from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function EmptyCart() {
    const StyledButton = styled(Button)({
        backgroundColor: "#000",
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
        <Box 
            sx={{
                width: "100%"
            }}>
            <Box
            sx={{justifyItems: "center"}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx={{
                        textAlign: "center",
                        mt: 3
                    }}
                    > 
                    Tu Carrito está vacio
                </Typography>
                <Typography 
                    variant="h7" 
                    component="div"
                    sx={{
                        textAlign: "center",
                        mb: 3
                    }}
                    > 
                    ¿No sabes que comprar?
                    Presioná aquí abajo
                </Typography>
                
                <StyledButton 
                    sx={{
                        color: "#94ff8f", 
                        borderColor: "#94ff8f", 
                        marginBottom: ".5rem", 
                        bgcolor:"#000"
                    }} 
                    variant="contained">
                        <Link style={{textDecoration: "none", color:"#94ff8f"}} to={"/"}>
                            Ir a comprar
                        </Link>
                </StyledButton>
            </Box>
        </Box>

    )
}

export default EmptyCart