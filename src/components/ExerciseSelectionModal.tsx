
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, X } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { exercisesDatabase } from '@/data/exercisesDatabase';

interface ExerciseSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExercise: (exercise: any) => void;
  onCreateNewExercise: () => void;
}

const ExerciseSelectionModal: React.FC<ExerciseSelectionModalProps> = ({ 
  isOpen, 
  onClose, 
  onSelectExercise,
  onCreateNewExercise
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'peito', name: 'Peito' },
    { id: 'costas', name: 'Costas' },
    { id: 'ombros', name: 'Ombros' },
    { id: 'bracos', name: 'Braços' },
    { id: 'pernas', name: 'Pernas' },
    { id: 'core', name: 'Core' },
    { id: 'cardio', name: 'Cardio' }
  ];

  const filteredExercises = exercisesDatabase.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || exercise.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectExercise = (exercise: any) => {
    console.log('Exercício selecionado:', exercise.name);
    onSelectExercise(exercise);
    toast(`${exercise.name} selecionado!`);
    onClose();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Selecionar Exercício</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Barra de pesquisa */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar exercícios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categorias */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "workout-gradient text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Botão Criar Novo Exercício */}
          <Button
            onClick={() => {
              onCreateNewExercise();
              onClose();
            }}
            className="w-full workout-gradient text-white flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Criar Novo Exercício
          </Button>

          {/* Lista de exercícios */}
          <div className="max-h-96 overflow-y-auto space-y-2">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="p-3 border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => handleSelectExercise(exercise)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{exercise.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs capitalize">
                        {exercise.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {exercise.equipment}
                      </Badge>
                      <Badge className={`text-xs ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredExercises.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Nenhum exercício encontrado</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseSelectionModal;
