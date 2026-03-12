import { useState } from "react";
import useStorage from "./useLocalStorage";
import products from "../data/products";

function useCart() {
    const [cart, setCart] = useStorage("Cart", []);

    return {cart, setCart};
}

export default useCart;