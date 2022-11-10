
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { Grid } from '@mui/material';

function Item({product}) {

  const StyledButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#bebebe',
      borderColor: '#1f04b8',
      boxShadow: '21px -18px 21px -19px rgba(9,15,46,0.66);',
    
    },
    '&:active': {
      boxShadow: '21px -18px 21px -19px rgba(9,15,46,0.66);',
      backgroundColor: '#272727',
      borderColor: '#94ff8f',
    },
    '&:focus': {
      boxShadow: '21px -18px 21px -19px rgba(9,15,46,0.66);',
    },
  });

  return (
    <Grid 
      className='grid-item' 
      item 
      xs={12} sm={6} md={4} lg={3} 
      align="center" 
      mt={15}
      
    >
      <Card 
        sx={{ 
          width: "80%", 
          bgcolor: "#ffffff",
        }}>
          <CardMedia 
            component="img" 
            sx={{
              height:"150px", 
              width:"100%"
            }} 
            src={product.pictureUrl} />
                      
          <CardContent 
            sx={{
              textAlign: "center"
              }}
            >
              <Typography 
                gutterBottom 
                variant="h5"
                component="div" 
                sx={{
                  color: "#000000", 
                  display:"block", 
                  fontWeight: "700"
                  }}
                >
                  {product.title}
              </Typography>
              <Typography 
                gutterBottom 
                variant="h6" 
                sx={{
                  color: "#000000",
                  display: "block"
                  }}
              >
                Stock: {product.stock}
              </Typography>
              <Typography 
                gutterBottom 
                variant='h6' 
                sx={{
                  color: "#000000", 
                  display:"block", 
                  fontWeight: "700"
                  }}
                >
                  ${product.price}
                </Typography>
                <StyledButton 
                sx={{
                  color: "#1f04b8",
                  borderColor: "#1f04b8"
                  }} 
                  variant="outlined"
                  startIcon={<MenuBookIcon />}>
                    <Link 
                      style={{textDecoration: "none", color:"#1f04b8"}} 
                      to={"/item/"+product.id}>
                        detalle del producto
                    </Link>
                </StyledButton>
          </CardContent>
      </Card> 
    </Grid>
  )
}
export default Item;