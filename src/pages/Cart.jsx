import useCart from "../hooks/useCart"
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const CartProduct = () => {
    const {cart} = useCart();

    return (
        <>
        <Navbar/>
        {cart.map((product) => (
            <div className="mt-4 p-4 border rounded">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            </div>
        ))}
        <Footer/>
        </>
    )
}

export default CartProduct