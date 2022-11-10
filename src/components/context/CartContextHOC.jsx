import React, { createContext, useState, useEffect } from 'react'
export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([])
  const [productsInCart, setProductsInCart] = useState(0)
  const [ total , setTotal ] = useState(0)

  const addItemToCart = (item, cantidad) => {
    if(cantidad <= 0){
      setCart([...cart])
    } else {
      if(!isInCart(item.id)){
        if(cantidad > item.stock){
          alert(`El stock es de ${item.stock} productos y usted ingresó ${cantidad} productos`)
        } else{
          item.quantity = cantidad
          setCart([...cart, item])
          saveCartInLocalStorage([...cart, item])
        }
      } else {
        const aux = cart.map((product) => {
          if(product.id == item.id){
            if(product.stock < product.quantity + cantidad){
              alert(`El stock es de ${product.stock} y usted ingresó ${product.quantity + cantidad} productos`)
              product.quantity = product.quantity - cantidad
            }
            const itemRepeated = {...product, quantity: product.quantity + cantidad}
            return itemRepeated 
        }
        return product
      })
        setCart(aux)
      }
    }
  }

  const isInCart = (itemId) => {
    const repeatedProduct = cart.find((product) => product.id === itemId)
    //console.log("repeated", repeatedProduct)
    return repeatedProduct
  }

  const removeItem = (item) => {
    //console.log("itemId", item.id)
    const itemsToDontRemove = cart.filter(product => product.id != item.id)
    if(itemsToDontRemove){
      setCart([...itemsToDontRemove])
      saveCartInLocalStorage([...itemsToDontRemove])
    }
  }

  const clearCart = () => {
    //console.log('Cart', cart)
    setCart([])
    saveCartInLocalStorage([])   
  }

 useEffect(() => {

  let partialPrice = 0
  let partialQuantityProducts = 0
  

  cart.map(product => {
    partialPrice += product.price * product.quantity
    partialQuantityProducts += product.quantity
    
    return partialPrice, partialQuantityProducts
  
  })
  setTotal(partialPrice)
  setProductsInCart(partialQuantityProducts)
 }, [cart])


 const saveCartInLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

const getCartInLocalStorage = () => {
  if(localStorage.getItem("cart")){
    setCart(JSON.parse(localStorage.getItem("cart")))
  }
}

useEffect(() => {
  getCartInLocalStorage()
}, [])


 

  return (
    <>
      <cartContext.Provider 
        value={{ 
          cart,
          addItemToCart, 
          removeItem, 
          clearCart, 
          isInCart,
          productsInCart,
          total
          }} >
        {children}
      </cartContext.Provider>
    </> 
  )
}

export default CartContextHOC;