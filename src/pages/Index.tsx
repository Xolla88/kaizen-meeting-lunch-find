
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import FeatureIcon from '@/components/FeatureIcon';
import KaizenForm from '@/components/KaizenForm';
import EmployeeFinder from '@/components/EmployeeFinder';
import { Lightbulb, Calendar, UtensilsCrossed, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isKaizenOpen, setIsKaizenOpen] = useState(false);
  const [isEmployeeFinderOpen, setIsEmployeeFinderOpen] = useState(false);
  const { toast } = useToast();

  const handleBookMeetingRoom = () => {
    // Open Google Calendar in a new tab
    window.open('https://calendar.google.com', '_blank');
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
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-corporate-800 mb-12">
          Корпоративный портал
        </h1>
        
        <div className="flex flex-col items-center gap-6">
          <FeatureIcon
            icon={Lightbulb}
            label="Кайдзен"
            onClick={() => setIsKaizenOpen(true)}
          />
          
          <FeatureIcon
            icon={Calendar}
            label="Забронировать переговорную комнату"
            onClick={handleBookMeetingRoom}
          />
          
          <FeatureIcon
            icon={UtensilsCrossed}
            label="Заказать обед"
            onClick={handleOrderLunch}
          />
          
          <FeatureIcon
            icon={Users}
            label="Найти сотрудника"
            onClick={() => setIsEmployeeFinderOpen(true)}
          />
        </div>
      </div>
      
      <KaizenForm open={isKaizenOpen} onOpenChange={setIsKaizenOpen} />
      <EmployeeFinder open={isEmployeeFinderOpen} onOpenChange={setIsEmployeeFinderOpen} />
    </Layout>
  );
};

export default Index;
