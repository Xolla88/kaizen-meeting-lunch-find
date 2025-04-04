
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, X, Phone, Mail, Building } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  phone: string;
  email: string;
}

// Mock data
const mockEmployees: Employee[] = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    position: 'Генеральный директор',
    department: 'Руководство',
    phone: '+7 (999) 123-45-67',
    email: 'ivanov@company.ru',
  },
  {
    id: 2,
    name: 'Петрова Анна Сергеевна',
    position: 'Директор по персоналу',
    department: 'HR',
    phone: '+7 (999) 234-56-78',
    email: 'petrova@company.ru',
  },
  {
    id: 3,
    name: 'Сидоров Алексей Петрович',
    position: 'Финансовый директор',
    department: 'Финансы',
    phone: '+7 (999) 345-67-89',
    email: 'sidorov@company.ru',
  },
  {
    id: 4,
    name: 'Козлова Екатерина Дмитриевна',
    position: 'Маркетолог',
    department: 'Маркетинг',
    phone: '+7 (999) 456-78-90',
    email: 'kozlova@company.ru',
  },
  {
    id: 5,
    name: 'Новиков Дмитрий Александрович',
    position: 'Разработчик',
    department: 'IT',
    phone: '+7 (999) 567-89-01',
    email: 'novikov@company.ru',
  }
];

interface EmployeeFinderProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmployeeFinder: React.FC<EmployeeFinderProps> = ({ open, onOpenChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Employee[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    
    const filteredEmployees = mockEmployees.filter(employee => 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setResults(filteredEmployees);
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-corporate-700">
            Поиск сотрудников
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4"
          >
            <X size={18} />
          </Button>
        </DialogHeader>
        
        <form onSubmit={handleSearch} className="flex gap-2 mt-4">
          <Input
            placeholder="Введите имя, должность или отдел"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" />
            Найти
          </Button>
        </form>
        
        <div className="mt-6 space-y-4">
          {results.length === 0 && searchTerm && (
            <p className="text-center text-muted-foreground py-8">
              Сотрудники не найдены
            </p>
          )}
          
          {results.map((employee) => (
            <div 
              key={employee.id} 
              className="border rounded-lg p-4 flex items-start gap-4 hover:bg-gray-50"
            >
              <Avatar className="h-12 w-12 bg-corporate-100 text-corporate-700">
                <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{employee.name}</h3>
                <p className="text-sm text-muted-foreground">{employee.position}</p>
                
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Building size={14} className="text-muted-foreground" />
                    <span>{employee.department}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={14} className="text-muted-foreground" />
                    <span>{employee.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={14} className="text-muted-foreground" />
                    <span>{employee.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeFinder;
