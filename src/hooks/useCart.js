import { useState } from "react";
import useStorage from "./useLocalStorage";
import products from "../data/products";

function useCart() {
    const [selectedId, setSelectedId] = useState(null);
    const [cart, setCart] = useStorage("Cart", []);

    const selectedProduct = products.find(p => p.id === selectedId);

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

    return { selectedId, setSelectedId, selectedProduct, addToCart, cart };
}

export default useCart;
