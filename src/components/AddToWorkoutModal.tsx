
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, X } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import ExerciseSelectionModal from './ExerciseSelectionModal';

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
  const [showExerciseSelection, setShowExerciseSelection] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const availableWorkouts = [
    { id: 1, name: 'Push - Peito, Ombro, Tríceps', date: '2025-06-20', status: 'Ativo' },
    { id: 2, name: 'Pull - Costas, Bíceps', date: '2025-06-19', status: 'Concluído' },
    { id: 3, name: 'Legs - Pernas Completo', date: '2025-06-18', status: 'Planejado' }
  ];

  const handleAddToWorkout = () => {
    if (!selectedWorkout) return;

    const exerciseToAdd = selectedExercise || exercise;
    if (!exerciseToAdd) return;

    const workout = availableWorkouts.find(w => w.id === selectedWorkout);
    console.log('Adicionando exercício', exerciseToAdd.name, 'ao treino', workout?.name);
    
    toast(`${exerciseToAdd.name} adicionado ao treino: ${workout?.name}`);
    onClose();
    setSelectedWorkout(null);
    setSelectedExercise(null);
  };

  const handleCreateNewWorkout = () => {
    const exerciseToAdd = selectedExercise || exercise;
    if (!exerciseToAdd) return;
    
    console.log('Criando novo treino com exercício:', exerciseToAdd.name);
    toast(`Novo treino criado com ${exerciseToAdd.name}!`);
    onClose();
    setSelectedExercise(null);
  };

  const handleSelectFromLibrary = () => {
    setShowExerciseSelection(true);
  };

  const handleExerciseSelected = (ex: Exercise) => {
    setSelectedExercise(ex);
    setShowExerciseSelection(false);
  };

  const handleCreateNewExercise = () => {
    console.log('Abrindo criação de novo exercício');
    toast('Funcionalidade de criar exercício será implementada em breve!');
  };

  const currentExercise = selectedExercise || exercise;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Adicionar Exercício ao Treino</span>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Seleção de Exercício */}
            {!currentExercise ? (
              <div className="space-y-3">
                <h3 className="font-medium">Escolha um exercício:</h3>
                <div className="space-y-2">
                  <Button
                    onClick={handleSelectFromLibrary}
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    Selecionar da Biblioteca
                  </Button>
                  <Button
                    onClick={handleCreateNewExercise}
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Criar Novo Exercício
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {/* Exercício Selecionado */}
                <div className="p-3 bg-accent/20 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{currentExercise.name}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedExercise(null)}
                    >
                      Trocar
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {currentExercise.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {currentExercise.equipment}
                    </Badge>
                  </div>
                </div>

                {/* Seleção de Treino */}
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

                {/* Botões de Ação */}
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
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Seleção de Exercícios */}
      <ExerciseSelectionModal
        isOpen={showExerciseSelection}
        onClose={() => setShowExerciseSelection(false)}
        onSelectExercise={handleExerciseSelected}
        onCreateNewExercise={handleCreateNewExercise}
      />
    </>
  );
};

export default AddToWorkoutModal;
