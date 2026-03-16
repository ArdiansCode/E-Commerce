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
             <a href="#Menu">
                <button onClick={() => setSelectedId(null)} className="mt-20">
                    Kembali
                </button>
            </a>
            <ProductDetail 
                product={selectedProduct} 
            /></>
        );
    } else {
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
}

export default Home;