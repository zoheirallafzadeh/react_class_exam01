import { useState } from "react";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type AppContextType = {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeCart: (id: number) => void;
  getCartItem: (id: number) => CartItemType | null;
  updateCart: (id: number, quantity: number) => void;
  clearCart: () => void;
  userInfo: UserInfoType;
  updateUserInfo: (value: UserInfoType, token: string) => void;
  logOut:()=>void
};

export type UserInfoType = {
  id: number;
  name: string;
  family: string;
  email: string;
  phone?: string;
  avatar?: string;
};

function useAppContext() {
  const cartItems = localStorage.getItem("cart") || "[]";
  const userInfoStorage = localStorage.getItem("userInfo") || "{}";

  const [cart, setCart] = useState<CartItemType[]>(JSON.parse(cartItems));
  const [userInfo, setUserInfo] = useState<UserInfoType>(
    JSON.parse(userInfoStorage)
  );

  const updateUserInfo = (userInfo: UserInfoType, token: string) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("token", token);
    setUserInfo(userInfo);
  };

  const logOut = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("userInfo")
    setUserInfo({} as UserInfoType)
  }

  const addToCart = (item: CartItemType) => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      const cartItems = JSON.parse(cart);

      const index = cartItems.findIndex((cartItem: CartItemType) => {
        return cartItem.id === item.id;
      });

      if (index === -1) {
        cartItems.push(item);
      } else {
        cartItems[index].quantity += item.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
      setCart([item]);
    }
  };
  const removeCart = (id: number) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      const index = cartItems.findIndex((cartItem: CartItemType) => {
        return cartItem.id === id;
      });
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };
  const updateCart = (id: number, quantity: number) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      const index = cartItems.findIndex((cartItem: CartItemType) => {
        return cartItem.id === id;
      });
      cartItems[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    }
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getCartItem = (id: number) => {
    return cart.find((f) => f.id === id) || null;
  };

  return {
    cart,
    addToCart,
    removeCart,
    updateCart,
    clearCart,
    getCartItem,
    userInfo,
    updateUserInfo,
    logOut
  };
}

export default useAppContext;
