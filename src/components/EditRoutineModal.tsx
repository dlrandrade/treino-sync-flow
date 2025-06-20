
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, GripVertical } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface Routine {
  id: number;
  name: string;
  exercises: string[];
  estimatedTime: number;
  lastUsed: string;
}

interface EditRoutineModalProps {
  routine: Routine | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedRoutine: Routine) => void;
}

const EditRoutineModal: React.FC<EditRoutineModalProps> = ({ 
  routine, 
  isOpen, 
  onClose, 
  onSave 
}) => {
  const [name, setName] = useState(routine?.name || '');
  const [exercises, setExercises] = useState(routine?.exercises || []);
  const [estimatedTime, setEstimatedTime] = useState(routine?.estimatedTime || 60);
  const [newExercise, setNewExercise] = useState('');

  const availableExercises = [
    'Supino Reto', 'Agachamento', 'Puxada Frontal', 'Desenvolvimento Militar',
    'Rosca Direta', 'Leg Press', 'Prancha', 'Deadlift', 'Flexão de Braço',
    'Remada Curvada', 'Elevação Lateral', 'Tríceps Testa', 'Afundo', 'Abdominal'
  ];

  const handleAddExercise = (exerciseName: string) => {
    if (!exercises.includes(exerciseName)) {
      setExercises(prev => [...prev, exerciseName]);
      setNewExercise('');
      toast(`${exerciseName} adicionado à rotina!`);
    }
  };

  const handleRemoveExercise = (exerciseName: string) => {
    setExercises(prev => prev.filter(ex => ex !== exerciseName));
    toast(`${exerciseName} removido da rotina!`);
  };

  const handleSave = () => {
    if (!routine || !name.trim() || exercises.length === 0) {
      toast('Preencha o nome e adicione pelo menos um exercício!');
      return;
    }

    const updatedRoutine = {
      ...routine,
      name: name.trim(),
      exercises,
      estimatedTime
    };

    console.log('Salvando rotina editada:', updatedRoutine);
    onSave(updatedRoutine);
    toast('Rotina atualizada com sucesso!');
    onClose();
  };

  if (!routine) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Rotina</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Nome da Rotina */}
          <div>
            <Label htmlFor="routine-name">Nome da Rotina</Label>
            <Input
              id="routine-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Push - Peito, Ombro, Tríceps"
            />
          </div>

          {/* Tempo Estimado */}
          <div>
            <Label htmlFor="estimated-time">Tempo Estimado (minutos)</Label>
            <Input
              id="estimated-time"
              type="number"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(Number(e.target.value))}
              min="1"
              max="180"
            />
          </div>

          {/* Exercícios Atuais */}
          <div>
            <Label>Exercícios na Rotina ({exercises.length})</Label>
            <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
              {exercises.map((exercise, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-accent/20 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
                    <span className="font-medium">{exercise}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveExercise(exercise)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              
              {exercises.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Nenhum exercício adicionado
                </div>
              )}
            </div>
          </div>

          {/* Adicionar Exercício */}
          <div>
            <Label>Adicionar Exercício</Label>
            <div className="flex gap-2 mt-2">
              <Input
                value={newExercise}
                onChange={(e) => setNewExercise(e.target.value)}
                placeholder="Digite o nome do exercício"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newExercise.trim()) {
                    handleAddExercise(newExercise.trim());
                  }
                }}
              />
              <Button
                onClick={() => newExercise.trim() && handleAddExercise(newExercise.trim())}
                disabled={!newExercise.trim()}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-3">
              <p className="text-sm text-muted-foreground mb-2">Ou escolha um exercício:</p>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {availableExercises
                  .filter(ex => !exercises.includes(ex))
                  .map((exercise) => (
                    <Badge
                      key={exercise}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleAddExercise(exercise)}
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      {exercise}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 workout-gradient text-white"
            >
              Salvar Alterações
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditRoutineModal;
