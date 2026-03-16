import { useState, useEffect } from "react";
import useStorage from "./useLocalStorage";
import products from "../data/products";


function useCart() {
    const [selectedId, setSelectedId] = useState(null);
    const [cart, setCart] = useStorage("Cart", []);
    const [co, setCo] = useStorage("Checkout", []);
    const [priceTotal, setPriceTotal] = useState(0)
    const [buy, setBuy] = useState(0)
    const [searchTerm, setSearchTerm] = useState("");
    const [data] = useState(products);

    const filteredData = products.filter(item => {
        return item.name && typeof item.name === 'string' 
            ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
            : false;
    });


    const selectedProduct = products.find(p => Number(p.id) === Number(selectedId));

    const addToCart = (product) => {
        if (!product) return;

        setCart(prev => {
            const isExist = prev.find(item => item.id === product.id);
            if (isExist) return prev;

            return [...prev, {
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description
            }];
        });
    };

    useEffect(() => {
        if (selectedProduct) {
            setPriceTotal(selectedProduct.price * buy);
        } else {
            setPriceTotal(0);
        }
    }, [buy, selectedProduct]);

    const handleChange = (event) => {
        const value = Number(event.target.value);
        setBuy(value);
    };
    
    const checkO = (product) => {
        console.log("Data produk yang masuk:", product);
        if (!product) {
            console.error("Produk kosong, fungsi berhenti.");
            return;
        }

        setCo(prev => {
            return [...prev, {
                id: product.id,
                name: product.name,
                priceTotal: priceTotal,
                description: product.description
            }];
        });
    };
    

    return {filteredData, setSearchTerm, priceTotal, buy, setBuy, handleChange, checkO, co, setCo, selectedId, setSelectedId, selectedProduct, addToCart, cart };
}

export default useCart;
