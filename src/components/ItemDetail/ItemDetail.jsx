
import { Box, Button, Typography, Container } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/CartContextHOC';
import Loading from '../Loading/Loading';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import  ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import GenericError from './../Error/GenericError';
import { Grid } from '@mui/material';

function ItemDetail({product, loading}) {
   // function onAdd(cantidad){
  //   console.log("cantidad", cantidad)
  //   alert("Se agregaron" + " " + cantidad + " " + " productos al carrito")
  // }
  const {addItemToCart } = useContext(cartContext)
  // console.log("product", product)
  
  return (
    <Container 
      sx={{mt: "5%"}}
      className='CONTAINER' 
      maxWidth="lg" 
      align="center"
    >
      {loading ? 
        <Loading />
        :
        product.length !== 0 ?
        <Box  justifyContent="center">
        
          <Button 
            startIcon={<ShoppingCartIcon />} 
            sx={{mb: 2,mt: 3, width: "250px" }} 
            variant="contained" 
            color="success"
            mt={40}
            
            >
              <Link 
                to={"/"} 
                style={{textDecoration: "none", color:"#fff"}}
              >
                  Seguir comprando
              </Link>
          </Button>
              
            <Grid 
              container 
              sx={{ 
                width: "80%", 
                height: "100%" , 
                bgcolor: "#000", 
                alignItems: "center"
          
                }}
              >
              <Grid 
                item 
                xs={12} sm={12} md={6} 
                component="img" 
                src={product.pictureUrl} 
                sx={{maxHeight: "300px"}} 
                
              />
              <Grid 
                item 
                xs={12} sm={12} md={6} 
                component="div" 
                sx={{p: 4}}
              >
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div" 
                  sx={{
                    color: "#94ff8f", 
                    display:"block", 
                    fontWeight: "700"
                  }}>
                    {product.title}
                </Typography>
                <Typography 
                  gutterBottom 
                  variant="h7" 
                  component="div" 
                  sx={{
                    color: "#fff", 
                    display: "block"
                  }}
                >
                <Typography 
                  variant="h6" 
                  sx={{fontWeight: "600"}}
                  >
                    Ingredientes:
                  </Typography> 
                    {product.description}
                  </Typography>
                <Typography 
                  gutterBottom 
                  variant='h6' 
                  component="div" 
                  sx={{
                    color: "#fff", 
                    display:"block", 
                    fontWeight: "700"
                    }}
                >
                    ${product.price}
                </Typography>
                <ItemCount 
                  stock={product.stock} 
                  initial={1} 
                  addItemToCart={addItemToCart} 
                  product={product}
                />
              </Grid>
            </Grid>
        </Box>
        : <GenericError message={"Parece que ha habido un error al cargar el detalle del producto"} />
      }
   
    </Container>
  )
}

export default ItemDetail