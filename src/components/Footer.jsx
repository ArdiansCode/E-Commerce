const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10" id='Contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-extrabold text-white tracking-tighter mb-6 block">BwaBwa</span>
            <p className="text-slate-400 mb-6">
              Penyediia makanan Indonesia yang paling sedap dan maknyoss.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Nav Link</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/Home" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="/Menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#Contact" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <p className="text-slate-400 mb-4 text-sm">+62 833-7777-9189</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© 2026 BwaBwa Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;