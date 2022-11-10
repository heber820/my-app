import React from 'react'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { cartContext } from '../context/CartContextHOC';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function DeleteProduct({product}) {
    const {removeItem} = useContext(cartContext)
    return (
        <>
        <Button onClick={()=> removeItem(product)} variant="contained" color="error" ><DeleteForeverIcon/></Button>  
        </>
    )
}
