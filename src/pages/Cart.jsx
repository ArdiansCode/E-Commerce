import useCart from "../hooks/useCart";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CartProduct = () => {
    const { cart, setCart } = useCart();
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            
            <main className="max-w-4xl mx-auto px-4 pt-32 pb-20">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tighter">Keranjang Belanja</h1>
                </div>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                            {cart.map((product, index) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={product.id} 
                                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden">
                                            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
                                            <p className="text-slate-400 text-sm mb-1">{product.description?.substring(0, 50)}...</p>
                                            <span className="font-extrabold text-primary">Rp {product.price?.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <button 
                                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <div className="mb-6 flex justify-center">
                            <ShoppingBag className="w-16 h-16 text-slate-200" />
                        </div>
                        <p className="text-xl text-slate-400 font-medium mb-6">Wah, keranjangmu masih kosong nih!</p>
                        <Link to="/checkout" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                            Mulai Belanja
                        </Link>
                    </div>
                )}
            </main>
            
            <Footer />
        </div>
    );
};

export default CartProduct;
