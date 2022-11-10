// @ts-check
import React from 'react';
import Loading from '../Loading/Loading';
import Item from './Item';
import GenericError from './../Error/GenericError';
import { Grid } from '@mui/material';


function ItemList({products, loading, error}) {
  return (
    <>
    {loading && <Loading />}
    
    <Grid container className="grid-container" spacing={2} justifyContent="center">
      {products && products.map((product) => <Item key={product.id} product={product}/>)}
    </Grid>

    {error && <GenericError  message={"Parece que ha habido un error al cargar el catálogo de productos"}/>}
    </>
  )
}

export default ItemList;