import { useCart } from "../context/context";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { CreditCard, Package, ArrowRight, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

function CheckOut() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { handleChange, buy, setBuy, priceTotal, selectedId, setSelectedId, selectedProduct,  checkO} = useCart();

    useEffect(() => {
        if (id) setSelectedId(Number(id));
    }, [id, setSelectedId]);

    const adjustQty = (amount) => {
        const newVal = buy + amount;
        if (newVal >= 0 && newVal <= 100) setBuy(newVal);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        
        if (selectedProduct) {
            checkO(selectedProduct);
            navigate("/Success");
        } else {
            alert("Produk tidak ditemukan!");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            
            <main className="max-w-4xl mx-auto px-4 pt-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Sisi Kiri: Detail Pesanan */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tighter mb-8">Konfirmasi Pesanan</h1>
                        
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <Package className="text-primary w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-800">{selectedProduct?.name || "Produk"}</h3>
                                    <p className="text-slate-400 text-sm">ID Produk: {selectedId}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Jumlah Barang</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border-2 border-slate-100 rounded-2xl p-1 bg-slate-50">
                                        <button onClick={() => adjustQty(-1)} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <input
                                            type="number"
                                            value={buy}
                                            onChange={handleChange}
                                            className="w-16 text-center bg-transparent font-extrabold text-lg focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                        <button onClick={() => adjustQty(1)} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <span className="text-slate-400 text-sm">Maks. 100 unit</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <div className="bg-[#334155] text-white p-8 rounded-[2rem] shadow-2xl shadow-slate-200 sticky top-32">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                <CreditCard className="w-6 h-6" /> Ringkasan
                            </h2>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-slate-400">
                                    <span>Harga Satuan</span>
                                    <span>Rp {selectedProduct?.price?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Jumlah</span>
                                    <span>x {buy}</span>
                                </div>
                                <div className="pt-4 border-t border-slate-600 flex justify-between items-end">
                                    <span className="font-medium">Total Tagihan</span>
                                    <span className="text-3xl font-extrabold text-white">
                                        Rp {priceTotal?.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <Link 
                                to="/Success" 
                                onClick={handlePayment}
                                className="w-full bg-white text-slate-900 py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all shadow-xl group"
                            >
                                Bayar Sekarang
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <p className="text-center text-slate-500 text-xs mt-6">
                                Transaksi aman & terenkripsi
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CheckOut;
