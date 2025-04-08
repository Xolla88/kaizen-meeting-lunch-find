
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface MeetingRoomBookingProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const rooms = [
  { id: 1, name: 'Переговорная 1', capacity: 4, available: true },
  { id: 2, name: 'Переговорная 2', capacity: 6, available: true },
  { id: 3, name: 'Переговорная 3', capacity: 6, available: true },
  { id: 4, name: 'Большая переговорная', capacity: 12, available: true },
  { id: 5, name: 'Точка рационализаторства', capacity: 8, available: true },
];

const MeetingRoomBooking: React.FC<MeetingRoomBookingProps> = ({ open, onOpenChange }) => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('10:00');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const { toast } = useToast();

  const times = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleBookRoom = () => {
    const room = rooms.find(r => r.id === selectedRoom);
    
    if (room) {
      toast({
        title: "Бронирование успешно",
        description: `Вы забронировали ${room.name} на ${selectedDate} в ${selectedTime}`,
      });
      
      onOpenChange(false);
    } else {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите переговорную комнату",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Переговорные комнаты</span>
          </DialogTitle>
          <DialogDescription>
            Выберите переговорную комнату, дату и время для бронирования
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Дата</label>
              <input 
                type="date" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Время</label>
              <select 
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2"
              >
                {times.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Доступные переговорные</h3>
            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead className="hidden sm:table-cell">Вместимость</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rooms.map((room) => (
                    <TableRow 
                      key={room.id} 
                      className={selectedRoom === room.id ? "bg-muted hover:bg-muted" : ""}
                      onClick={() => setSelectedRoom(room.id)}
                    >
                      <TableCell className="font-medium">{room.name}</TableCell>
                      <TableCell className="hidden sm:table-cell">{room.capacity} чел.</TableCell>
                      <TableCell>
                        {room.available ? (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                            Доступна
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                            Занята
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Отмена</Button>
          <Button onClick={handleBookRoom}>Забронировать</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingRoomBooking;
