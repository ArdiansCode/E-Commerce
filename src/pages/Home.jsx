import ProductCard from "../components/ProductCard";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductDetail from "./ProductDetail";
import useCart from "../hooks/useCart";
import CartProduct from "./Cart";

function Home() {
    const {selectedId, setSelectedId, selectedProduct} = useCart();   

    return (
        <>
        <Navbar />
        { selectedId ? (
            <div> 
            <a href="#Menu"><button onClick={() => setSelectedId(null)} className="mt-20">Kembali</button></a>
            <ProductDetail 
            product={selectedProduct}
        />
        <CartProduct/> </div>) : (
        <div>
        <Hero />
        <ProductCard 
            onSelectProduct={setSelectedId}
        />
        </div>)}
        <Footer />
        </>
    )
}

export default Home;