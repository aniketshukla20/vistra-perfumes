"use client";
import { useState } from "react";

export default function Home() {
  // Yeh Cart mein add hue items aur menu open/close ko control karega
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Perfumes ka main data
  const perfumes = [
    { id: 1, name: "Midnight Aura", price: 1499, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Ocean Breeze", price: 1299, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Royal Oud", price: 2199, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop" }
  ];

  // Item add karne ka function
  const addToCart = (perfume: any) => {
    setCartItems([...cartItems, perfume]);
  };

  // Menu open/close karne ka function
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Total price calculate karna
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-white text-black relative">
      
      {/* Top Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black text-white sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-yellow-500">Vistra.</h1>
        <div className="space-x-6 font-semibold flex items-center">
          <a href="#" className="hover:text-yellow-500 transition">Home</a>
          <a href="#" className="hover:text-yellow-500 transition">Perfumes</a>
          <button onClick={toggleCart} className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-white hover:text-black transition shadow-lg">
            Cart ({cartItems.length})
          </button>
        </div>
      </nav>

      {/* Cart Sidebar (Drawer) */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6 flex flex-col border-l-4 border-yellow-500 overflow-hidden">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={toggleCart} className="text-red-500 font-bold text-xl hover:text-black transition">X</button>
          </div>
          
          <div className="flex-grow overflow-y-auto pr-2">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 bg-gray-50 p-3 rounded border">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-yellow-600 font-bold">₹{item.price}</p>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-4 mt-4 bg-white">
            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Total:</span>
              <span>₹{totalAmount}</span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded font-bold hover:bg-yellow-500 hover:text-black transition">
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-24 bg-gray-50">
        <h2 className="text-6xl font-bold mb-6 text-center">Discover Your Signature Scent</h2>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl px-4">
          Experience the luxury of premium fragrances crafted for every occasion. Step into the world of Vistra.
        </p>
      </header>

      {/* Products Section */}
      <section className="p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Our Best Sellers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="border p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition flex flex-col bg-white">
              <img src={perfume.image} alt={perfume.name} className="w-full h-64 object-cover mb-4 rounded" />
              <h4 className="text-2xl font-bold">{perfume.name}</h4>
              <p className="text-yellow-600 font-bold mt-2 text-lg mb-4">₹{perfume.price}</p>
              <button 
                onClick={() => addToCart(perfume)} 
                className="mt-auto px-4 py-3 bg-black text-white rounded w-full hover:bg-yellow-500 hover:text-black font-semibold transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white text-center py-10 mt-10">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">Vistra.</h2>
        <p className="text-gray-400 mb-4">Premium Fragrances Crafted For You</p>
        <p className="text-sm text-gray-500">© 2026 Vistra Perfumes. All rights reserved.</p>
      </footer>

    </div>
  );
}