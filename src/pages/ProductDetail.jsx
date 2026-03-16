import useCart from "../hooks/useCart";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {
    const { selectedId, setSelectedId, selectedProduct, addToCart, cart } = useCart();

    return (
        <>
        <Navbar />
        <div className="p-10">

            <h3>Detail Produk:</h3>
            
            {product ? (
                <div className="mt-4 p-4 border rounded">
                    <p>ID: {product.id}</p>
                    <p>Nama: {product.name}</p>
                    <p>Detail: {product.description}</p>
                    <p className="font-bold">Harga: Rp.{product.price}</p>
                    
                    <div className="flex gap-2 mt-4">
                        <button 
                            className="bg-green-500 text-white p-2 rounded" 
                            onClick={() => addToCart(product)}
                        >
                            Masukkan keranjang
                        </button>
                        <Link to="/Checkout" className="bg-blue-500 text-white p-2 rounded">
                            Beli Sekarang
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500">Silakan klik produk untuk melihat detail.</p>
            )}
        </div>
        <Footer />
        </>
    );
}

export default ProductDetail;
