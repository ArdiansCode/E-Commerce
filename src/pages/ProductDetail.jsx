import useCart from "../hooks/useCart";

const ProductDetail = ({ product }) => {
    const {addToCart} = useCart();
    return (
        <div className="p-10">
            <h3>Detail Produk:</h3>
            {product ? (
                <div className="mt-4 p-4 border rounded">
                    <p>ID: {product.id}</p>
                    <p>Nama: {product.name}</p>
                    <p>Detail: {product.description}</p>
                    <p className="font-bold">Harga: Rp.{product.price}</p>
                    <button onClick={() => addToCart(product)}>Masukkan keranjang</button>
                    <button class="bg-blue">beli</button>
                </div>
            ) : (
                <p className="text-gray-500">Silakan klik produk untuk melihat detail.</p>
            )}
        </div>
    );
}

export default ProductDetail