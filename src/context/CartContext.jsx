import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('shiv-tiles-cart', []);
  const [wishlist, setWishlist] = useLocalStorage('shiv-tiles-wishlist', []);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
      toast.success('Quantity updated in cart!');
    } else {
      setCart([...cart, { ...product, quantity }]);
      toast.success('Product added to cart!');
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.info('Product removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Cart cleared');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const addToWishlist = (product) => {
    const existingItem = wishlist.find(item => item.id === product.id);
    
    if (existingItem) {
      toast.info('Product already in wishlist');
      return;
    }
    
    setWishlist([...wishlist, product]);
    toast.success('Added to wishlist!');
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
    toast.info('Removed from wishlist');
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
