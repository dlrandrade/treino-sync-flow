
import React, { useState } from 'react';
import { Search, Filter, Plus, Play, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ExerciseDetailModal from './ExerciseDetailModal';
import AddToWorkoutModal from './AddToWorkoutModal';
import { toast } from '@/components/ui/sonner';
import { exercisesDatabase } from '@/data/exercisesDatabase';

const ExercisesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddToWorkoutModal, setShowAddToWorkoutModal] = useState(false);
  const [exerciseToAdd, setExerciseToAdd] = useState(null);
  const [favorites, setFavorites] = useState<number[]>([]);

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

  const handleViewDetails = (exercise: any) => {
    console.log('Abrindo detalhes do exercício:', exercise.name);
    setSelectedExercise(exercise);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExercise(null);
  };

  const handleAddToWorkout = (exercise: any) => {
    console.log('Adicionando exercício ao treino:', exercise.name);
    setExerciseToAdd(exercise);
    setShowAddToWorkoutModal(true);
  };

  const handleToggleFavorite = (exerciseId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId];
      
      const exercise = exercisesDatabase.find(ex => ex.id === exerciseId);
      if (newFavorites.includes(exerciseId)) {
        toast(`${exercise?.name} adicionado aos favoritos!`);
      } else {
        toast(`${exercise?.name} removido dos favoritos!`);
      }
      
      return newFavorites;
    });
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
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Biblioteca de Exercícios</h1>
        <Button className="workout-gradient text-white">
          <Plus className="w-4 h-4 mr-2" />
          Criar Exercício
        </Button>
      </div>

      {/* Barra de pesquisa e filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar exercícios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
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

      {/* Lista de exercícios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise) => (
          <div key={exercise.id} className="bg-card rounded-lg border border-border hover:border-primary/50 transition-colors overflow-hidden">
            {/* Media Preview */}
            <div className="relative h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-center p-4">
                <Play className="w-12 h-12 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Demonstração disponível</p>
              </div>
              <div className="absolute top-2 left-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleFavorite(exercise.id);
                  }}
                  className={`p-1 h-8 w-8 ${favorites.includes(exercise.id) ? 'text-red-500' : 'text-muted-foreground'}`}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(exercise.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
              <div className="absolute bottom-2 left-2">
                <Badge className={getDifficultyColor(exercise.difficulty)}>
                  {exercise.difficulty}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg">{exercise.name}</h3>
                <Button variant="ghost" size="sm">
                  ⋯
                </Button>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex justify-between">
                  <span>Categoria:</span>
                  <span className="capitalize font-medium">{exercise.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Equipamento:</span>
                  <span className="font-medium">{exercise.equipment}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleViewDetails(exercise)}
                >
                  Ver Detalhes
                </Button>
                <Button 
                  onClick={() => handleAddToWorkout(exercise)}
                  className="flex-1 workout-gradient text-white"
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum exercício encontrado</p>
        </div>
      )}

      {/* Modal de Detalhes */}
      <ExerciseDetailModal
        exercise={selectedExercise}
        isOpen={showModal}
        onClose={handleCloseModal}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={selectedExercise ? favorites.includes(selectedExercise.id) : false}
      />

      {/* Modal Adicionar ao Treino */}
      <AddToWorkoutModal
        exercise={exerciseToAdd}
        isOpen={showAddToWorkoutModal}
        onClose={() => setShowAddToWorkoutModal(false)}
      />
    </div>
  );
};

export default ExercisesPage;
