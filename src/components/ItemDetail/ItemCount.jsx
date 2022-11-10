// @ts-check
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, ButtonGroup, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function ItemCount({stock, initial, addItemToCart, product}) {
    
    const [count, setCount] = useState(initial);
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = () => {
      console.log(product.quantity)
        // if (stockAvailable === true){
          if(count > 0){
            addItemToCart(product, count)
            setGoToCart(true)
          }
        // }
    }

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
      <>
        <Box >
          {!goToCart ?
                <>
                <ButtonGroup 
                  disableElevation 
                  variant="contained" 
                  sx={{width: "70%"}}
                >
                    <IconButton 
                      disableRipple={true} 
                      onClick={() => setCount(count > initial ? count - 1 : count)} 
                      sx={{
                        backgroundColor: "#272727", 
                        color: "#94ff8f", 
                        borderColor: "#000"
                      }} 
                      disabled={count < initial}> 
                      <RemoveIcon /> 
                    </IconButton>
                    <Box 
                      sx={{
                        color: "#fff", 
                        width: "100%", 
                        textAlign: "center"
                      }}
                    >
                      <Typography 
                        sx={{fontSize: "20pt"}}
                      >
                        {count}
                      </Typography>
                    </Box>
                    <IconButton 
                      disableRipple={true} 
                      onClick={()=> setCount(count < stock ? count + 1 : count)} 
                      sx={{
                        backgroundColor: "#272727", 
                        color: "#94ff8f", 
                        borderColor: "#000"
                      }} 
                      disabled={count === stock}> 
                      <AddIcon/> 
                    </IconButton>
                </ButtonGroup >
                
                    <StyledButton 
                      onClick={()=> onAdd()} 
                      sx={{
                        color: "#94ff8f", 
                        borderColor: "#94ff8f", 
                        marginTop:"1rem", 
                        width: "100%", 
                        mb: 2
                      }} 
                      variant="outlined" 
                      startIcon={<ShoppingCartIcon />} 
                    > 
                      Añadir al carrito 
                    </StyledButton>
                </>
                  :
                  <StyledButton 
                    sx={{
                      color: "#94ff8f", 
                      borderColor: "#94ff8f", 
                      mt:"1rem", 
                      width: "100%", 
                      mb: 2
                    }} 
                    variant="outlined" 
                    startIcon={<CreditCardIcon />}> 
                      <Link 
                        to={"/cart"} 
                        style={{textDecoration: "none", color:"#94ff8f"}}
                      > 
                        Finalizar la compra 
                      </Link>
                  </StyledButton>
            }
        </Box>
      </>
    )
}
export default ItemCount;