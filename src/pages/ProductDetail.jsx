import useCart from "../hooks/useCart";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, CreditCard } from 'lucide-react';

const ProductDetail = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <Link to="/Home" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Menu
                </Link>
                {product ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    src={product.img} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Detail Produk</span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
                                {product.name}
                            </h1>
                            
                            <p className="text-xl text-slate-500 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="pt-4">
                                <span className="text-3xl font-extrabold text-primary">
                                    Rp {product.price?.toLocaleString('id-ID')}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Tambah Keranjang
                                </button>
                                
                                <Link 
                                    to={`/checkout/${product.id}`} 
                                    className="flex items-center justify-center gap-2 bg-[#334155] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all"
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Beli Sekarang
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-xl font-medium">Produk tidak ditemukan.</p>
                        <Link to="/" className="text-primary font-bold mt-4 inline-block underline">Kembali Cari Menu</Link>
                    </div>
                )}
            </main>
            
            <Footer />
        </div>
    );
}

export default ProductDetail;
