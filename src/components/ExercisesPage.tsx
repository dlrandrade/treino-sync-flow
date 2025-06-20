
import React, { useState } from 'react';
import { Search, Filter, Plus, Play, Image, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ExerciseDetailModal from './ExerciseDetailModal';
import AddToWorkoutModal from './AddToWorkoutModal';
import { toast } from '@/components/ui/sonner';

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

  const exercises = [
    { 
      id: 1, 
      name: 'Supino Reto', 
      category: 'peito', 
      equipment: 'Barra', 
      difficulty: 'Intermediário',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/BenchPress.mp4'
    },
    { 
      id: 2, 
      name: 'Agachamento', 
      category: 'pernas', 
      equipment: 'Barra', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/Squat.mp4'
    },
    { 
      id: 3, 
      name: 'Puxada Frontal', 
      category: 'costas', 
      equipment: 'Máquina', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/LatPulldown.mp4'
    },
    { 
      id: 4, 
      name: 'Desenvolvimento Militar', 
      category: 'ombros', 
      equipment: 'Halteres', 
      difficulty: 'Intermediário',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/MilitaryPress.mp4'
    },
    { 
      id: 5, 
      name: 'Rosca Direta', 
      category: 'bracos', 
      equipment: 'Barra', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/BicepCurl.mp4'
    },
    { 
      id: 6, 
      name: 'Leg Press', 
      category: 'pernas', 
      equipment: 'Máquina', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/LegPress.mp4'
    },
    { 
      id: 7, 
      name: 'Prancha', 
      category: 'core', 
      equipment: 'Peso Corporal', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/Plank.mp4'
    },
    { 
      id: 8, 
      name: 'Deadlift', 
      category: 'pernas', 
      equipment: 'Barra', 
      difficulty: 'Avançado',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/Deadlift.mp4'
    },
    { 
      id: 9, 
      name: 'Flexão de Braço', 
      category: 'peito', 
      equipment: 'Peso Corporal', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/PushUp.mp4'
    },
    { 
      id: 10, 
      name: 'Remada Curvada', 
      category: 'costas', 
      equipment: 'Barra', 
      difficulty: 'Intermediário',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/BentOverRow.mp4'
    },
    { 
      id: 11, 
      name: 'Elevação Lateral', 
      category: 'ombros', 
      equipment: 'Halteres', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/LateralRaise.mp4'
    },
    { 
      id: 12, 
      name: 'Tríceps Testa', 
      category: 'bracos', 
      equipment: 'Halteres', 
      difficulty: 'Intermediário',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/SkullCrusher.mp4'
    },
    { 
      id: 13, 
      name: 'Afundo', 
      category: 'pernas', 
      equipment: 'Peso Corporal', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/Lunge.mp4'
    },
    { 
      id: 14, 
      name: 'Abdominal', 
      category: 'core', 
      equipment: 'Peso Corporal', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/Crunch.mp4'
    },
    { 
      id: 15, 
      name: 'Burpee', 
      category: 'cardio', 
      equipment: 'Peso Corporal', 
      difficulty: 'Avançado',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/Burpee.mp4'
    },
    { 
      id: 16, 
      name: 'Pull-ups', 
      category: 'costas', 
      equipment: 'Barra Fixa', 
      difficulty: 'Avançado',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/PullUp.mp4'
    },
    { 
      id: 17, 
      name: 'Supino Inclinado', 
      category: 'peito', 
      equipment: 'Halteres', 
      difficulty: 'Intermediário',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/InclineBenchPress.mp4'
    },
    { 
      id: 18, 
      name: 'Cadeira Extensora', 
      category: 'pernas', 
      equipment: 'Máquina', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://www.learningexercises.com/assets/video/LegExtension.mp4'
    }
  ];

  const filteredExercises = exercises.filter(exercise => {
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
      
      const exercise = exercises.find(ex => ex.id === exerciseId);
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
            <div className="relative h-48 bg-gray-100">
              <video 
                src={exercise.mediaUrl} 
                className="w-full h-full object-cover"
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
              <div className="absolute top-2 right-2">
                <div className="bg-black/60 text-white p-1 rounded-full">
                  <Play className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute top-2 left-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleFavorite(exercise.id);
                  }}
                  className={`p-1 h-8 w-8 ${favorites.includes(exercise.id) ? 'text-red-500' : 'text-white'}`}
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
