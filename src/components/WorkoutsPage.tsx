
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Weight, TrendingUp, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import WorkoutFilters from './WorkoutFilters';

const WorkoutsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: 'all',
    exerciseTypes: [],
    durationRange: 'all',
    volumeRange: 'all'
  });

  const allWorkouts = [
    {
      id: 1,
      date: '2025-06-19',
      duration: 65,
      exercises: ['Supino Reto', 'Leg Press', 'Rosca Direta'],
      exerciseTypes: ['Peito', 'Pernas', 'Braços'],
      volume: 2850,
      sets: 12
    },
    {
      id: 2,
      date: '2025-06-17',
      duration: 58,
      exercises: ['Agachamento', 'Desenvolvimento', 'Remada'],
      exerciseTypes: ['Pernas', 'Ombros', 'Costas'],
      volume: 3200,
      sets: 15
    },
    {
      id: 3,
      date: '2025-06-15',
      duration: 72,
      exercises: ['Deadlift', 'Pull-ups', 'Dips'],
      exerciseTypes: ['Pernas', 'Costas', 'Peito'],
      volume: 2950,
      sets: 10
    },
    {
      id: 4,
      date: '2025-06-12',
      duration: 45,
      exercises: ['Rosca Direta', 'Tríceps Testa', 'Elevação Lateral'],
      exerciseTypes: ['Braços', 'Ombros'],
      volume: 1800,
      sets: 9
    },
    {
      id: 5,
      date: '2025-06-10',
      duration: 85,
      exercises: ['Agachamento', 'Leg Press', 'Extensora', 'Flexora'],
      exerciseTypes: ['Pernas'],
      volume: 4200,
      sets: 18
    }
  ];

  const filteredWorkouts = useMemo(() => {
    return allWorkouts.filter(workout => {
      // Filtro de data
      if (filters.dateRange !== 'all') {
        const workoutDate = new Date(workout.date);
        const now = new Date();
        const diffTime = now.getTime() - workoutDate.getTime();
        const diffDays = diffTime / (1000 * 3600 * 24);

        switch (filters.dateRange) {
          case 'week':
            if (diffDays > 7) return false;
            break;
          case 'month':
            if (diffDays > 30) return false;
            break;
          case '3months':
            if (diffDays > 90) return false;
            break;
        }
      }

      // Filtro de tipos de exercício
      if (filters.exerciseTypes.length > 0) {
        const hasMatchingType = filters.exerciseTypes.some((type: string) =>
          workout.exerciseTypes.includes(type)
        );
        if (!hasMatchingType) return false;
      }

      // Filtro de duração
      if (filters.durationRange !== 'all') {
        switch (filters.durationRange) {
          case 'short':
            if (workout.duration > 45) return false;
            break;
          case 'medium':
            if (workout.duration <= 45 || workout.duration > 75) return false;
            break;
          case 'long':
            if (workout.duration <= 75) return false;
            break;
        }
      }

      return true;
    });
  }, [filters]);

  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Filtros aplicados:', newFilters);
    toast(`Filtros aplicados! ${filteredWorkouts.length} treinos encontrados.`);
  };

  const handleViewDetails = (workoutId: number) => {
    console.log('Visualizando detalhes do treino:', workoutId);
    toast(`Abrindo detalhes do treino ${workoutId}! (Em desenvolvimento)`);
  };

  const hasActiveFilters = 
    filters.dateRange !== 'all' || 
    filters.exerciseTypes.length > 0 || 
    filters.durationRange !== 'all';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Histórico de Treinos</h1>
        <Button 
          onClick={() => setShowFilters(true)} 
          className="workout-gradient text-white"
          variant={hasActiveFilters ? "default" : "outline"}
        >
          <Filter className="w-4 h-4 mr-2" />
          Filtrar {hasActiveFilters && `(${filteredWorkouts.length})`}
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Esta Semana</span>
          </div>
          <p className="text-2xl font-bold">
            {filteredWorkouts.filter(w => {
              const date = new Date(w.date);
              const now = new Date();
              const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
              return diffDays <= 7;
            }).length} treinos
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Tempo Total</span>
          </div>
          <p className="text-2xl font-bold">
            {Math.floor(filteredWorkouts.reduce((total, w) => total + w.duration, 0) / 60)}h {filteredWorkouts.reduce((total, w) => total + w.duration, 0) % 60}min
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Weight className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Volume Total</span>
          </div>
          <p className="text-2xl font-bold">
            {(filteredWorkouts.reduce((total, w) => total + w.volume, 0) / 1000).toFixed(1)}k kg
          </p>
        </div>
      </div>

      {/* Lista de treinos */}
      <div className="space-y-4">
        {filteredWorkouts.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Nenhum treino encontrado com os filtros aplicados</p>
            <Button 
              variant="outline" 
              onClick={() => setFilters({ dateRange: 'all', exerciseTypes: [], durationRange: 'all', volumeRange: 'all' })}
              className="mt-4"
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          filteredWorkouts.map((workout) => (
            <div key={workout.id} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 workout-gradient rounded-lg flex items-center justify-center">
                    <Weight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Treino de {new Date(workout.date).toLocaleDateString('pt-BR')}</h3>
                    <p className="text-sm text-muted-foreground">{workout.exercises.join(', ')}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleViewDetails(workout.id)}
                >
                  Ver Detalhes
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{workout.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span>{workout.volume}kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{workout.sets} séries</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal de Filtros */}
      <WorkoutFilters
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        onApplyFilters={handleApplyFilters}
        currentFilters={filters}
      />
    </div>
  );
};

export default WorkoutsPage;
