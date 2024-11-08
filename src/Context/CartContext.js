import { createContext, useContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("LIST_CART")
      ? JSON.parse(localStorage.getItem("LIST_CART"))
      : []
  );
  const addToCart = (product, quantity, size) => {
    const newCart = [...cart];
    const checkIndex = newCart.findIndex(
      (item) => item.id === product.id && item.size === size
    );
    if (size === "26cm") {
      product.price = (parseFloat(product.price) + 20.0).toFixed(2);
    }
    if (checkIndex >= 0) {
      newCart[checkIndex].quantity += quantity;
    } else {
      product.quantity = quantity;
      product.size = size;
      newCart.push(product);
    }

    setCart(newCart);
    localStorage.setItem("LIST_CART", JSON.stringify(newCart));
  };

  const deleteToCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  // Tính tổng số lượng sản phẩm
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Tính tổng giá trị của giỏ hàng
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <CartContext.Provider
      value={{ addToCart, cart, deleteToCart, getTotalQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => {
  return useContext(CartContext);
};
export { CartProvider, useCart };
