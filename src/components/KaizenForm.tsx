
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(5, 'ФИО должно содержать не менее 5 символов'),
  currentState: z.string().min(10, 'Опишите текущую ситуацию подробнее'),
  desiredState: z.string().min(10, 'Опишите желаемую ситуацию подробнее'),
  expectedResult: z.string().min(10, 'Опишите ожидаемый результат подробнее'),
});

interface KaizenFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const KaizenForm: React.FC<KaizenFormProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      currentState: '',
      desiredState: '',
      expectedResult: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    toast({
      title: 'Предложение отправлено',
      description: 'Ваше предложение по улучшению успешно отправлено',
    });
    
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-corporate-700">
            Кайдзен-предложение
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
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">ФИО</FormLabel>
                  <FormControl>
                    <Input placeholder="Иванов Иван Иванович" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="currentState"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Как сейчас</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Опишите текущую ситуацию" 
                      {...field}
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="desiredState"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Как надо</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Опишите желаемую ситуацию" 
                      {...field}
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="expectedResult"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Что получим</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Опишите ожидаемый результат" 
                      {...field}
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
              >
                Отмена
              </Button>
              <Button 
                type="submit"
                className="bg-corporate-600 hover:bg-corporate-700"
              >
                Отправить предложение
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default KaizenForm;
