import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function Success() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <main className="max-w-7xl mx-auto px-4 pt-40 pb-20 flex flex-col items-center justify-center text-center">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
                >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-4">
                        Pesanan Diterima!
                    </h1>
                    <p className="text-xl text-slate-500 max-w-md mx-auto leading-relaxed mb-12">
                        Terima kasih sudah jajan di <span className="text-primary font-bold">BwaBwa</span>. 
                        Pesananmu sedang kami siapkan dengan cinta.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >                    
                    <Link 
                        to="/Home" 
                        className="flex items-center justify-center gap-2 bg-slate-100 text-slate-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                    >
                        Kembali
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="mt-20 opacity-20 grayscale">
                    <span className="text-8xl font-black tracking-tighter text-slate-200 select-none">
                        BWABWA
                    </span>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Success;
