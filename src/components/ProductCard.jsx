import React, { useState } from 'react';
import { Search, ShoppingCart, Play, Star, ArrowRight, Clock, MapPin, Utensils, Menu as MenuIcon, X } from 'lucide-react';
import { motion } from 'motion/react';
import products from '../data/products';
import "../index.css";
const ProductCard = () => {
  return (
    <section className="py-20" id='Menu'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Menu/Produk</h2>
            <p className="text-slate-500">Berikut menu yang kami sajikan.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="relative mb-6">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">{product.description.toLowerCase()}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-extrabold text-primary">Rp.{product.price}</span>
                <button className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Pesan</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;