
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '@/components/Layout';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы авторизация через API
    toast({
      title: "Успешный вход",
      description: "Вы успешно вошли в систему",
    });
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      });
      return;
    }
    // В реальном приложении здесь была бы регистрация через API
    toast({
      title: "Успешная регистрация",
      description: "Вы успешно зарегистрировались",
    });
    navigate('/');
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-md py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#2A3A4A]">Авторизация</h2>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-login">Рабочая почта</Label>
                <Input 
                  id="email-login"
                  type="email" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone-login">Или телефон</Label>
                <Input 
                  id="phone-login"
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password-login">Пароль</Label>
                <Input 
                  id="password-login"
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <Button type="submit" className="w-full bg-corporate-600 hover:bg-corporate-700">
                Войти
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-register">Рабочая почта</Label>
                <Input 
                  id="email-register"
                  type="email" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone-register">Контактный телефон</Label>
                <Input 
                  id="phone-register"
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password-register">Пароль</Label>
                <Input 
                  id="password-register"
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Подтверждение пароля</Label>
                <Input 
                  id="confirm-password"
                  type="password" 
                  placeholder="••••••••" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-corporate-600 hover:bg-corporate-700">
                Зарегистрироваться
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Auth;
