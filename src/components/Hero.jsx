import { motion } from 'motion/react';
import "../index.css";
import makananIndo from "../assets/makanan-indo.jpg"

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden" id='Home'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Welcome</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              To BwaBwa<br />
              <span className="text-primary">Makanan</span> Indo
            </h1>
            <p className="text-slate-500 text-lg mb-8 max-w-lg">
              Kami menyediakan makanan populer Indonesia. Makanan kami dibuat dengan bahan-bahan segar dan dimasak dengan sepenuh hati. Pesan sekarang dan nikmati!
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a href='#Menu' className="bg-gray-600 text-white px-8 py-4 font-bold shadow-lg hover:scale-105 transition-transform">
                Pesan Sekarang
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={makananIndo}
                alt="Delicious Burger" 
                className="w-full max-w-md mx-auto shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />

            </div>

            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;