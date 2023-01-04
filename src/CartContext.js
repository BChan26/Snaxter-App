import { createContext, useState } from "react"
import { getItemData, itemsArray } from "./MenuItems"

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalPrice: () => {},
})

export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        } 

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) { //product not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                    }
                ]
            )
        } else { //product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity == 1) { //product is in cart and quantity is 1
            deleteFromCart(id)
        } else { //product is in cart and quantity is > 1
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }


    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id
            })
        )
    }

    function getTotalPrice() {
        let totalPrice = 0
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            totalPrice += (productData.price * cartItem.quantity)
        })
        return totalPrice
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalPrice,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider