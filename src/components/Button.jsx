import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';

function Button() {
    const cart = <div>
                    <Link to="/Cart">
                    <ShoppingCart className="w-5 h-5 text-slate-700" />
                    <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
                    </Link>
                </div>
  return {cart};
}

export default Button;