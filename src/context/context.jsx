import React, { createContext, useContext, useState, useEffect } from 'react';
import products from "../data/products";
import useStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [cart, setCart] = useStorage("Cart", []);
    const [co, setCo] = useStorage("Checkout", []);
    const [priceTotal, setPriceTotal] = useState(0);
    const [buy, setBuy] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = products.filter(item => {
        return item.name && typeof item.name === 'string' 
            ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
            : false;
    });

    const selectedProduct = products.find(p => Number(p.id) === Number(selectedId));

    useEffect(() => {
        if (selectedProduct) {
            setPriceTotal(selectedProduct.price * buy);
        } else {
            setPriceTotal(0);
        }
    }, [buy, selectedProduct]);

    const addToCart = (product) => {
        if (!product) return;
        setCart(prev => {
            const isExist = prev.find(item => item.id === product.id);
            if (isExist) return prev;
            alert(`${product.name} berhasil ditambah ke keranjang!`);
            return [...prev, { ...product }];
        });
    };

    const handleChange = (event) => {
        setBuy(Number(event.target.value));
    };
    
    const checkO = (product) => {
        if (!product) return;
        setCo(prev => [...prev, {
            id: product.id,
            name: product.name,
            priceTotal: priceTotal,
            description: product.description
        }]);
    };

    return (
        <CartContext.Provider value={{ 
            filteredData, searchTerm, setSearchTerm, 
            priceTotal, setPriceTotal, buy, setBuy, 
            handleChange, checkO, co, setCo, 
            selectedId, setSelectedId, selectedProduct, 
            addToCart, cart, setCart 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
