
import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      <header className="bg-white py-4 px-6 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <div className="text-corporate-700 font-bold flex items-center">
            <div className="w-12 h-12 mr-2">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-corporate-700">
                <polygon points="50,10 10,90 90,90" fill="#CF3046" />
                <polygon points="50,20 20,85 80,85" fill="white" />
                <polygon points="50,30 30,80 70,80" fill="#CF3046" />
                <polygon points="50,40 40,75 60,75" fill="white" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[#2A3A4A] text-xl font-bold">ПСС</div>
              <div className="text-[#2A3A4A] text-[10px] uppercase tracking-wider">зарядные станции</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-corporate-700" aria-label="Поиск">
            <Search size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Меню"
            className="text-corporate-700"
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-0.5 bg-corporate-700"></div>
              <div className="w-6 h-0.5 bg-corporate-700"></div>
              <div className="w-6 h-0.5 bg-corporate-700"></div>
            </div>
          </Button>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-lg z-50 p-6 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#2A3A4A]">Меню</h2>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Закрыть меню" className="text-corporate-700">
                <div className="relative w-6 h-6">
                  <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-corporate-700 transform -rotate-45"></div>
                  <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-corporate-700 transform rotate-45"></div>
                </div>
              </Button>
            </div>
            <Separator className="my-4" />
            <nav>
              <ul className="space-y-4">
                <li>
                  <Button variant="ghost" className="w-full justify-start text-lg text-[#2A3A4A]" asChild>
                    <a href="/">Главная</a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-lg text-[#2A3A4A]" asChild>
                    <a href="/about">О компании</a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-lg text-[#2A3A4A]" asChild>
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
