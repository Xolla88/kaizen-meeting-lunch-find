
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import FeatureIcon from '@/components/FeatureIcon';
import KaizenForm from '@/components/KaizenForm';
import EmployeeFinder from '@/components/EmployeeFinder';
import { Lightbulb, Calendar, UtensilsCrossed, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isKaizenOpen, setIsKaizenOpen] = useState(false);
  const [isEmployeeFinderOpen, setIsEmployeeFinderOpen] = useState(false);
  const { toast } = useToast();

  const handleBookMeetingRoom = () => {
    // Open Yandex Calendar in a new tab instead of Google Calendar
    window.open('https://calendar.yandex.ru', '_blank');
    
    toast({
      title: "Открытие календаря",
      description: "Открываем Яндекс Календарь для бронирования переговорной",
    });
  };

  const handleOrderLunch = () => {
    // Open Telegram bot in a new tab
    window.open('https://t.me/your_lunch_bot', '_blank');
    
    toast({
      title: "Открытие чат-бота",
      description: "Открываем Telegram бот для заказа обеда",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-6 px-4 max-w-md">
        <div className="mb-8">
          <h2 className="text-xl text-[#2A3A4A] font-semibold mb-2">Корпоративный портал</h2>
          <p className="text-gray-600 text-sm">
            Возможность быстрой коммуникации и доступа к корпоративным сервисам
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <FeatureIcon
              icon={Lightbulb}
              label="Кайдзен"
              onClick={() => setIsKaizenOpen(true)}
            />
          </div>
          
          <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <FeatureIcon
              icon={Calendar}
              label="Забронировать переговорную комнату"
              onClick={handleBookMeetingRoom}
            />
          </div>
          
          <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <FeatureIcon
              icon={UtensilsCrossed}
              label="Заказать обед"
              onClick={handleOrderLunch}
            />
          </div>
          
          <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <FeatureIcon
              icon={Users}
              label="Найти сотрудника"
              onClick={() => setIsEmployeeFinderOpen(true)}
            />
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          <h3 className="text-lg font-semibold text-[#2A3A4A] mb-4">Документы</h3>
          <div className="space-y-4">
            <Button 
              className="w-full justify-center text-white bg-corporate-600 hover:bg-corporate-700"
              onClick={() => window.open('https://example.com/document1.pdf', '_blank')}
            >
              Скачать документ
            </Button>
          </div>
        </div>
      </div>
      
      <KaizenForm open={isKaizenOpen} onOpenChange={setIsKaizenOpen} />
      <EmployeeFinder open={isEmployeeFinderOpen} onOpenChange={setIsEmployeeFinderOpen} />
    </Layout>
  );
};

export default Index;
