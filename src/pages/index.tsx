import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="w-full bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to Our Shop</h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center mt-8 p-4">
        <Image
          src="/ShoppingMall.jpg"
          alt="Shopping Mall"
          width={800}
          height={500}
          className="rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }}
        />
        <p className="text-lg text-gray-700 mt-4">Find the best deals on groceries and more!</p>

        {/* Buttons for Navigation */}
        <div className="mt-6 space-x-4">
          <Link href="/auth/register">
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Shop Now
            </button>
          </Link>

          <Link href="/auth/login">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full mt-8 p-4 text-center bg-gray-800 text-white">
        <p>© 2025 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;