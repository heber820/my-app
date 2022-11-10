import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextHOC';
import EmptyCart from './EmptyCart';
import ProductsInCart from './ProductsInCart';
import { Typography, Container } from '@mui/material';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
function CartContainer() {
  
  const { cart, total, clearCart } = useContext(cartContext)
  //console.log("cart del cart", cart)
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
      {cart.length === 0 ? 
      <>
        <EmptyCart />
      </>
      :
      <>
      <Typography variant="h3" marginBottom={2} marginTop={2}>Carrito: ${total} </Typography>
      <Container sx={{bgcolor: "#f2f2f2"}} >
        <Grid container  justifyContent="center">
          {cart.map((product) => <Grid item xs={12} sm={6} md={3} lg={4} align="center" marginBottom={2} marginTop={2}><ProductsInCart product={product} /></Grid>)}
        </Grid>
          {/* <Box sx={{mb: 2, bgcolor: "#000", color: "#fff", borderRadius: "2.5%"}}> */}
          <Grid container justifyContent="center" alignItems="center" marginTop={2} marginBottom={2} width={"100%"} >
            <Grid item xs={12} md={4} lg={4}>
              <StyledButton startIcon={<ShoppingCartIcon />} sx={{mb: 1.5, bgcolor: "#000", borderColor: "#94ff8f", color: "#94ff8f"}} variant="outlined"><Link to={"/"} style={{textDecoration: "none", color:"#94ff8f"}}>Seguir comprando</Link></StyledButton> 
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Button startIcon={< LocalMallIcon/>} sx={{mb: 1.5 }} variant="contained" color="success"><Link to={"/checkout"} style={{textDecoration: "none", color:"#fff"}}>Finalizar compra</Link></Button>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Button startIcon={< DeleteIcon/>} onClick={()=> clearCart(cart)} sx={{mb: 2}} variant="contained" color="error" >Vaciar carrito</Button>
            </Grid>
          </Grid>
      </Container>
      </>
     
    }
    </>
   
  )
}

export default CartContainer