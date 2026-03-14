import products  from "../data/products";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
    // const [viewProduct, setViewProduct] = useState();

    return (
        <>
        <Navbar />
        <Hero />
        <ProductCard/>
        <Footer />
        </>
    )
}

export default Home;