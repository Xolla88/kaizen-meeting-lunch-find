
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Menu"
            className="mr-2"
          >
            <Menu size={24} />
          </Button>
        </div>
        
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-corporate-700">
            <span className="hidden sm:inline">Корпоративный портал</span>
          </h1>
        </div>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-corporate-600 text-white flex items-center justify-center font-bold">
            КП
          </div>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white shadow-lg z-50 p-6 animate-in slide-in-from-left">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Меню</h2>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Закрыть меню">
                <X size={24} />
              </Button>
            </div>
            <Separator className="my-4" />
            <nav>
              <ul className="space-y-4">
                <li>
                  <Button variant="ghost" className="w-full justify-start text-lg" asChild>
                    <a href="/">Главная</a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-lg" asChild>
                    <a href="/about">О компании</a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-lg" asChild>
                    <a href="/contacts">Контакты</a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      
      <main>{children}</main>
    </div>
  );
};

export default Layout;
