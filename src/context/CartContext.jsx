// src/context/CartContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [], // [{ product, quantity }]
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      {
        const { product, quantity } = action.payload;
        const existingItemIndex = state.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += quantity;
          return { ...state, items: updatedItems };
        } else {
          return {
            ...state,
            items: [...state.items, { product, quantity }],
          };
        }
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  };

  const removeItemFromCart = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateItemQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItemsInCart = state.items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
        totalItemsInCart,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};