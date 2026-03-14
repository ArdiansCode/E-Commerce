import useCart from "../hooks/useCart"

const CartProduct = () => {
    const {cart} = useCart();
    console.log("Isi Cart saat ini:", cart);

    return (
        <>
        {cart.map((product) => (
            <div className="mt-4 p-4 border rounded">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            </div>
        ))}
        </>
    )
}

export default CartProduct