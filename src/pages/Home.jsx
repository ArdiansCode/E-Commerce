import ProductCard from "../components/ProductCard";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductDetail from "./ProductDetail";
import { useCart } from "../context/context";
import { CartProvider } from "../context/context";

function Home() {
    const {selectedId, setSelectedId, selectedProduct} = useCart();  
    
    if (selectedId) {
        return (
            <>
            <ProductDetail 
                product={selectedProduct} 
            /></>
        );
    }
    return (
        <>
        <CartProvider>
        <Navbar />
        <Hero />
        <ProductCard 
            onSelectProduct={setSelectedId}
        />
        <Footer />
        </CartProvider>
        </>
    )

}

export default Home;