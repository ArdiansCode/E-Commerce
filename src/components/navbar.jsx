import React, { useState } from 'react';
import { Search, Menu as MenuIcon, X } from 'lucide-react';
import { motion } from 'motion/react';
import "../index.css";
import Button from './Button';
import { Link } from 'react-router-dom';
import { useCart } from '../context/context';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = Button();
    const {searchTerm, setSearchTerm} = useCart();


    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
                <span className="text-2xl font-extrabold text-primary tracking-tighter">BwaBwa</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
                <a href="/Home" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Beranda</a>
                <a href="/Home" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Menu</a>
                <a href="#Contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Kontak</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                <input 
                    type="text" 
                    id="search-input"
                    name="search" 
                    placeholder="Cari..." 
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="pl-10 pr-4 py-2 bg-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
                {cart}
                </button>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>
            </div>
        </div>

        {isOpen && (
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4"
            >
            <a href="/Home" className="block text-lg font-medium text-slate-600">beranda</a>
            <a href="/Home" className="block text-lg font-medium text-slate-600">Menu</a>
            <a href="#Contact" className="block text-lg font-medium text-slate-600">Kontak</a>
            <div className="flex items-center space-x-4 pt-4">
                <button className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold">Order Now</button>
            </div>
            </motion.div>
        )}
        </nav>
    );
};

export default Navbar;