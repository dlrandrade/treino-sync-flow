
import React, { useState } from 'react';
import { Search, Filter, Plus, Play, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ExerciseDetailModal from './ExerciseDetailModal';

const ExercisesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'peito', name: 'Peito' },
    { id: 'costas', name: 'Costas' },
    { id: 'ombros', name: 'Ombros' },
    { id: 'bracos', name: 'Braços' },
    { id: 'pernas', name: 'Pernas' },
    { id: 'core', name: 'Core' }
  ];

  const exercises = [
    { 
      id: 1, 
      name: 'Supino Reto', 
      category: 'peito', 
      equipment: 'Barra', 
      difficulty: 'Intermediário',
      mediaType: 'video',
      mediaUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 2, 
      name: 'Agachamento', 
      category: 'pernas', 
      equipment: 'Barra', 
      difficulty: 'Básico',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 3, 
      name: 'Puxada Frontal', 
      category: 'costas', 
      equipment: 'Máquina', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 4, 
      name: 'Desenvolvimento Militar', 
      category: 'ombros', 
      equipment: 'Halteres', 
      difficulty: 'Intermediário',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 5, 
      name: 'Rosca Direta', 
      category: 'bracos', 
      equipment: 'Barra', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 6, 
      name: 'Leg Press', 
      category: 'pernas', 
      equipment: 'Máquina', 
      difficulty: 'Básico',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 7, 
      name: 'Prancha', 
      category: 'core', 
      equipment: 'Peso Corporal', 
      difficulty: 'Básico',
      mediaType: 'video',
      mediaUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 8, 
      name: 'Deadlift', 
      category: 'pernas', 
      equipment: 'Barra', 
      difficulty: 'Avançado',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=300&fit=crop&crop=center'
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
              <img 
                src={exercise.mediaUrl} 
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                {exercise.mediaType === 'video' ? (
                  <div className="bg-black/60 text-white p-1 rounded-full">
                    <Play className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="bg-black/60 text-white p-1 rounded-full">
                    <Image className="w-4 h-4" />
                  </div>
                )}
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

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleViewDetails(exercise)}
              >
                Ver Detalhes
              </Button>
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
      />
    </div>
  );
};

export default ExercisesPage;
