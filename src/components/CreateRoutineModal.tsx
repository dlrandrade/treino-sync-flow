
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, X, Search } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface Exercise {
  id: number;
  name: string;
  category: string;
  equipment: string;
}

interface SelectedExercise extends Exercise {
  sets: number;
  reps: number;
}

interface CreateRoutineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateRoutine: (routine: any) => void;
}

const CreateRoutineModal: React.FC<CreateRoutineModalProps> = ({ 
  isOpen, 
  onClose, 
  onCreateRoutine 
}) => {
  const [routineName, setRoutineName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<SelectedExercise[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showExerciseList, setShowExerciseList] = useState(false);

  const availableExercises: Exercise[] = [
    { id: 1, name: 'Supino Reto', category: 'peito', equipment: 'Barra' },
    { id: 2, name: 'Agachamento', category: 'pernas', equipment: 'Barra' },
    { id: 3, name: 'Puxada Frontal', category: 'costas', equipment: 'Máquina' },
    { id: 4, name: 'Desenvolvimento Militar', category: 'ombros', equipment: 'Halteres' },
    { id: 5, name: 'Rosca Direta', category: 'bracos', equipment: 'Barra' },
    { id: 6, name: 'Leg Press', category: 'pernas', equipment: 'Máquina' },
    { id: 7, name: 'Prancha', category: 'core', equipment: 'Peso Corporal' },
    { id: 8, name: 'Deadlift', category: 'pernas', equipment: 'Barra' }
  ];

  const filteredExercises = availableExercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedExercises.some(selected => selected.id === exercise.id)
  );

  const addExercise = (exercise: Exercise) => {
    const newExercise: SelectedExercise = {
      ...exercise,
      sets: 3,
      reps: 10
    };
    setSelectedExercises(prev => [...prev, newExercise]);
    setShowExerciseList(false);
    setSearchTerm('');
    toast(`${exercise.name} adicionado à rotina!`);
  };

  const removeExercise = (exerciseId: number) => {
    setSelectedExercises(prev => prev.filter(ex => ex.id !== exerciseId));
  };

  const updateExercise = (exerciseId: number, field: 'sets' | 'reps', value: number) => {
    setSelectedExercises(prev => prev.map(ex => 
      ex.id === exerciseId ? { ...ex, [field]: value } : ex
    ));
  };

  const handleCreateRoutine = () => {
    if (!routineName.trim()) {
      toast('Por favor, digite um nome para a rotina');
      return;
    }

    if (selectedExercises.length === 0) {
      toast('Adicione pelo menos um exercício à rotina');
      return;
    }

    const newRoutine = {
      id: Date.now(),
      name: routineName,
      exercises: selectedExercises.map(ex => ex.name),
      exerciseDetails: selectedExercises,
      estimatedTime: selectedExercises.length * 10, // Estimativa simples
      lastUsed: new Date().toISOString().split('T')[0]
    };

    console.log('Criando nova rotina:', newRoutine);
    onCreateRoutine(newRoutine);
    toast(`Rotina "${routineName}" criada com sucesso!`);
    
    // Reset form
    setRoutineName('');
    setSelectedExercises([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Criar Nova Rotina</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Nome da Rotina */}
          <div>
            <Label htmlFor="routine-name">Nome da Rotina</Label>
            <Input
              id="routine-name"
              placeholder="Ex: Push Day - Peito, Ombro, Tríceps"
              value={routineName}
              onChange={(e) => setRoutineName(e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Exercícios Selecionados */}
          <div>
            <Label>Exercícios ({selectedExercises.length})</Label>
            <div className="mt-2 space-y-3">
              {selectedExercises.map((exercise) => (
                <div key={exercise.id} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{exercise.name}</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {exercise.category} • {exercise.equipment}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) => updateExercise(exercise.id, 'sets', Number(e.target.value))}
                        className="w-16 h-8"
                        min="1"
                      />
                      <span className="text-sm">séries</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) => updateExercise(exercise.id, 'reps', Number(e.target.value))}
                        className="w-16 h-8"
                        min="1"
                      />
                      <span className="text-sm">reps</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExercise(exercise.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Adicionar Exercícios */}
          <div>
            <Button 
              variant="outline" 
              onClick={() => setShowExerciseList(!showExerciseList)}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Exercício
            </Button>
            
            {showExerciseList && (
              <div className="mt-3 space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar exercícios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {filteredExercises.map((exercise) => (
                    <div 
                      key={exercise.id}
                      className="flex items-center justify-between p-3 bg-card rounded-lg border hover:border-primary/50 cursor-pointer transition-colors"
                      onClick={() => addExercise(exercise)}
                    >
                      <div>
                        <p className="font-medium">{exercise.name}</p>
                        <p className="text-sm text-muted-foreground capitalize">
                          {exercise.category} • {exercise.equipment}
                        </p>
                      </div>
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleCreateRoutine} className="flex-1 workout-gradient text-white">
              Criar Rotina
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoutineModal;
