
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore"

function ItemDetailContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
  
    //console.log("id", id)

    useEffect(() => { 
        const db = getFirestore()
        setLoading(true);
        
        const docRef = doc(db, "products", id)

        getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined) {
                    setProduct({id: snapshot.id, ...snapshot.data()})
                    //console.log("snapshot id", snapshot.data())
                    setLoading(false)
                    
                } else {
                    //console.log("No se encontro el producto")
                    setLoading(false)
                    
                }
            })
            
    }, [id])
    

    // const fetchProduct = () => {
    //     setLoading(true);
    //     setError(false);
    //     setProduct([])
    //     //console.log("Id", id)

    //     const productPromise = new Promise((res, rej) =>{
    //         setTimeout(() =>{
    //             //console.log("id", id)
    //             const itemDetail = allProducts.find((item) => item.id == id);
    //             res(itemDetail)
    //         }, 1000)
    //     })
    //     productPromise
    //     .then(
    //         res => setProduct(res)
    //     ).catch(
    //         () => setError(true)
    //     ).finally(
    //         () => setLoading(false)
    //     )
    // }

        // useEffect(() => {
        // fetchProduct()
        // }, [id])
    
        return (

            <Box sx={{width: "100%", height: "100%"}}>
                <ItemDetail product={product} loading={loading}  />
            </Box>
        )
}
export default ItemDetailContainer;
