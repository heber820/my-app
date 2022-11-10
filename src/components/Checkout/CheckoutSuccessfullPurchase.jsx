import React from 'react'
import { Box, Button, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styled from "@emotion/styled";
import { Grid, Container } from '@mui/material';

function CheckoutSuccessfullPurchase({id}) {

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
        <Container>
        <Grid >
            <Grid item backgroundColor={"#94ff8f"} marginBottom= {1} marginTop= {2}>
                <Typography variant="h5" sx={{color: "#000", textAlign: "center", pt: 4, fontWeight: 500, px: 4}}> ¡Su compra se ha generado de forma exitosa! </Typography>
                <CheckCircleOutlineIcon sx={{fontSize: 60, mt: 1, mb: 2}}/>
            </Grid>
            <Grid item backgroundColor={"#f4f4f4"} marginBottom= {1}>
                <LocalShippingIcon  sx={{fontSize: 60, pt: 4}}/>
                <Typography sx={{textAlign: "center", px: 5, pb: 3}}>Los productos ya están viajando, le avisaremos cuando esten llegando</Typography>
            </Grid>
            <Grid item backgroundColor={"#fafafa"} marginBottom= {3}>
                <ShoppingBagIcon sx={{fontSize: 60, pt: 4}}/>
                <Typography sx={{textAlign: "center", px: 7, pb: 3}}> El número de identificación de su compra es <em>{id}</em>, téngalo a mano, lo necesitará</Typography>
            </Grid>
            <Box>
                <StyledButton variant="contained" color="success" sx={{mb: 2}}><Link to={"/"} style={{textDecoration: "none", color: "#fff"}}>Seguir comprando</Link></StyledButton>
            </Box>
        </Grid>
        </Container>
    )
}

export default CheckoutSuccessfullPurchase