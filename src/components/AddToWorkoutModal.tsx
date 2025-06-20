
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface Exercise {
  id: number;
  name: string;
  category: string;
  equipment: string;
  difficulty: string;
}

interface AddToWorkoutModalProps {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: () => void;
}

const AddToWorkoutModal: React.FC<AddToWorkoutModalProps> = ({ 
  exercise, 
  isOpen, 
  onClose 
}) => {
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);

  const availableWorkouts = [
    { id: 1, name: 'Push - Peito, Ombro, Tríceps', date: '2025-06-20', status: 'Ativo' },
    { id: 2, name: 'Pull - Costas, Bíceps', date: '2025-06-19', status: 'Concluído' },
    { id: 3, name: 'Legs - Pernas Completo', date: '2025-06-18', status: 'Planejado' }
  ];

  const handleAddToWorkout = () => {
    if (!selectedWorkout || !exercise) return;

    const workout = availableWorkouts.find(w => w.id === selectedWorkout);
    console.log('Adicionando exercício', exercise.name, 'ao treino', workout?.name);
    
    toast(`${exercise.name} adicionado ao treino: ${workout?.name}`);
    onClose();
    setSelectedWorkout(null);
  };

  const handleCreateNewWorkout = () => {
    if (!exercise) return;
    
    console.log('Criando novo treino com exercício:', exercise.name);
    toast(`Novo treino criado com ${exercise.name}!`);
    onClose();
  };

  if (!exercise) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Adicionar "{exercise.name}" ao Treino
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="p-3 bg-accent/20 rounded-lg">
            <h4 className="font-medium mb-1">{exercise.name}</h4>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">
                {exercise.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {exercise.equipment}
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Selecione um treino:</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedWorkout === workout.id 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedWorkout(workout.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{workout.name}</h4>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(workout.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <Badge 
                          variant={workout.status === 'Ativo' ? 'default' : 'outline'}
                          className="text-xs"
                        >
                          {workout.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t space-y-3">
            <Button
              onClick={handleCreateNewWorkout}
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Criar Novo Treino
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleAddToWorkout}
                disabled={!selectedWorkout}
                className="flex-1 workout-gradient text-white"
              >
                Adicionar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddToWorkoutModal;
