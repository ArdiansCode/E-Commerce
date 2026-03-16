import ProductCard from "../components/ProductCard";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductDetail from "./ProductDetail";
import useCart from "../hooks/useCart";

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
        <Navbar />
        <Hero />
        <ProductCard 
            onSelectProduct={setSelectedId}
        />
        <Footer />
        </>
    )

}

export default Home;