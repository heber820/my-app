// @ts-check
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from '@mui/material/Badge';
import React, {useContext} from 'react';
import { cartContext } from '../context/CartContextHOC';

function CartWidget() {

    const {productsInCart} = useContext(cartContext)
    
    return (
        <>
        <StyledBadge 
            badgeContent={productsInCart} 
            sx={{
                "& .MuiBadge-badge": 
                    {color: "#000", 
                    backgroundColor: "#94ff8f"
                    }}}>
            <ShoppingCartIcon sx={{color : "#fff"}} />
        </StyledBadge>
        </>
    )
}

export default CartWidget;