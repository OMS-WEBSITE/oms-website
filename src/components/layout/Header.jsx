import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center">
        <a href="/" className="text-orange-500 text-2xl font-bold">OMS logo</a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Platform</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="/sign-in" className="text-gray-600 hover:text-gray-900">Sign In</a>
          </nav>
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Try 14 days free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
