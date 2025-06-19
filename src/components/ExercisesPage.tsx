
import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ExercisesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

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
    { id: 1, name: 'Supino Reto', category: 'peito', equipment: 'Barra', difficulty: 'Intermediário' },
    { id: 2, name: 'Agachamento', category: 'pernas', equipment: 'Barra', difficulty: 'Básico' },
    { id: 3, name: 'Puxada Frontal', category: 'costas', equipment: 'Máquina', difficulty: 'Básico' },
    { id: 4, name: 'Desenvolvimento Militar', category: 'ombros', equipment: 'Halteres', difficulty: 'Intermediário' },
    { id: 5, name: 'Rosca Direta', category: 'bracos', equipment: 'Barra', difficulty: 'Básico' },
    { id: 6, name: 'Leg Press', category: 'pernas', equipment: 'Máquina', difficulty: 'Básico' },
    { id: 7, name: 'Prancha', category: 'core', equipment: 'Peso Corporal', difficulty: 'Básico' },
    { id: 8, name: 'Deadlift', category: 'pernas', equipment: 'Barra', difficulty: 'Avançado' }
  ];

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || exercise.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExercises.map((exercise) => (
          <div key={exercise.id} className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium">{exercise.name}</h3>
              <Button variant="ghost" size="sm">
                ⋯
              </Button>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Categoria:</span>
                <span className="capitalize">{exercise.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Equipamento:</span>
                <span>{exercise.equipment}</span>
              </div>
              <div className="flex justify-between">
                <span>Dificuldade:</span>
                <span className={`font-medium ${
                  exercise.difficulty === 'Básico' ? 'text-green-500' :
                  exercise.difficulty === 'Intermediário' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4">
              Ver Detalhes
            </Button>
          </div>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum exercício encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ExercisesPage;
