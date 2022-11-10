import React from 'react'
import { Typography, Box, Button, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; 
import { Link } from 'react-router-dom';
function GenericError({message}) {
  return (

    <>
        <Container
        maxWidth="xs"
        sx={{
            width: "100%",
            mt: 2,
          }}>
        <Box
        sx={{justifyItems: "center"}}>
            <ErrorOutlineIcon color="error" sx={{fontSize: 60, mt: 2}} />
            <Typography 
                variant="h5" 
                component="div"
                sx={{
                  textAlign: "center",
                  mt: 1,
                  pb: 3,
                  color:"#000"
                }}
                > 
               {message}
            </Typography>
            
        </Box>
        <Button 
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
            </Button>
    </Container>
    </>
  )
}

export default GenericError