import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, selectedWeight) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id && item.weight === selectedWeight);
            if (existingItem) {
                return prev.map(item =>
                    (item.id === product.id && item.weight === selectedWeight)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, weight: selectedWeight, quantity: 1 }];
        });
    };

    const removeFromCart = (productId, weight) => {
        setCartItems(prev => prev.filter(item => !(item.id === productId && item.weight === weight)));
    };

    const updateQuantity = (productId, weight, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === productId && item.weight === weight) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartSubtotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
