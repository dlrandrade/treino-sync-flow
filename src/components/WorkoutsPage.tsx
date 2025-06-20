
import React, { useState } from 'react';
import { Calendar, Clock, TrendingUp, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WorkoutFilters from './WorkoutFilters';
import WorkoutDetailModal from './WorkoutDetailModal';

const WorkoutsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [filters, setFilters] = useState({
    period: 'all',
    exerciseType: 'all',
    duration: 'all'
  });

  const workouts = [
    {
      id: 1,
      name: 'Push - Peito, Ombro, Tríceps',
      date: '2025-06-20',
      duration: '1h 15min',
      status: 'Concluído',
      exercises: [
        { name: 'Supino Reto', sets: 4, weight: 80, reps: 10, volume: 3200 },
        { name: 'Desenvolvimento', sets: 3, weight: 30, reps: 12, volume: 1080 },
        { name: 'Tríceps Testa', sets: 3, weight: 25, reps: 15, volume: 1125 }
      ],
      totalVolume: '5,405kg',
      completedSets: 10,
      notes: 'Ótimo treino, consegui aumentar a carga no supino!'
    },
    {
      id: 2,
      name: 'Pull - Costas, Bíceps',
      date: '2025-06-18',
      duration: '1h 05min',
      status: 'Concluído',
      exercises: [
        { name: 'Puxada Frontal', sets: 4, weight: 70, reps: 10, volume: 2800 },
        { name: 'Remada Curvada', sets: 3, weight: 60, reps: 12, volume: 2160 },
        { name: 'Rosca Direta', sets: 3, weight: 20, reps: 15, volume: 900 }
      ],
      totalVolume: '5,860kg',
      completedSets: 10
    },
    {
      id: 3,
      name: 'Legs - Pernas Completo',
      date: '2025-06-16',
      duration: '1h 30min',
      status: 'Concluído',
      exercises: [
        { name: 'Agachamento', sets: 4, weight: 100, reps: 8, volume: 3200 },
        { name: 'Leg Press', sets: 3, weight: 200, reps: 12, volume: 7200 },
        { name: 'Cadeira Extensora', sets: 3, weight: 50, reps: 15, volume: 2250 }
      ],
      totalVolume: '12,650kg',
      completedSets: 10
    },
    {
      id: 4,
      name: 'Treino Funcional',
      date: '2025-06-14',
      duration: '45min',
      status: 'Cancelado',
      exercises: []
    },
    {
      id: 5,
      name: 'HIIT Cardio',
      date: '2025-06-12',
      duration: '30min',
      status: 'Concluído',
      exercises: [
        { name: 'Burpees', sets: 5, weight: 0, reps: 10, volume: 0 },
        { name: 'Mountain Climbers', sets: 5, weight: 0, reps: 20, volume: 0 }
      ],
      totalVolume: '0kg',
      completedSets: 10
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Em andamento': return 'bg-blue-100 text-blue-800';
      case 'Cancelado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (workout: any) => {
    console.log('Abrindo detalhes do treino:', workout.name);
    setSelectedWorkout(workout);
    setShowDetailModal(true);
  };

  const filterWorkouts = (workouts: any[]) => {
    return workouts.filter(workout => {
      // Filtro por período
      if (filters.period !== 'all') {
        const workoutDate = new Date(workout.date);
        const now = new Date();
        const daysDiff = Math.floor((now.getTime() - workoutDate.getTime()) / (1000 * 60 * 60 * 24));
        
        switch (filters.period) {
          case 'week':
            if (daysDiff > 7) return false;
            break;
          case 'month':
            if (daysDiff > 30) return false;
            break;
          case '3months':
            if (daysDiff > 90) return false;
            break;
        }
      }

      // Filtro por tipo de exercício
      if (filters.exerciseType !== 'all') {
        const hasType = workout.exercises?.some((ex: any) => {
          switch (filters.exerciseType) {
            case 'strength':
              return ex.weight > 0;
            case 'cardio':
              return ex.weight === 0;
            default:
              return true;
          }
        });
        if (!hasType) return false;
      }

      // Filtro por duração
      if (filters.duration !== 'all') {
        const duration = parseInt(workout.duration);
        switch (filters.duration) {
          case 'short':
            if (duration > 45) return false;
            break;
          case 'medium':
            if (duration <= 45 || duration > 90) return false;
            break;
          case 'long':
            if (duration <= 90) return false;
            break;
        }
      }

      return true;
    });
  };

  const filteredWorkouts = filterWorkouts(workouts);

  const stats = [
    { label: 'Total de Treinos', value: workouts.filter(w => w.status === 'Concluído').length.toString(), icon: Calendar },
    { label: 'Esta Semana', value: '3', icon: TrendingUp },
    { label: 'Tempo Total', value: '6h 45min', icon: Clock },
    { label: 'Volume Médio', value: '5.8t', icon: TrendingUp }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Histórico de Treinos</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <Button className="workout-gradient text-white">
            <Plus className="w-4 h-4 mr-2" />
            Novo Treino
          </Button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-card p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 workout-gradient rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Filtros */}
      <WorkoutFilters
        isOpen={showFilters}
        filters={filters}
        onFiltersChange={setFilters}
      />

      {/* Lista de treinos */}
      <div className="space-y-4">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{workout.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(workout.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{workout.duration}</span>
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(workout.status)}>
                {workout.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Exercícios</p>
                <p className="text-lg font-semibold">{workout.exercises?.length || 0}</p>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Volume Total</p>
                <p className="text-lg font-semibold">{workout.totalVolume || 'N/A'}</p>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Séries</p>
                <p className="text-lg font-semibold">{workout.completedSets || 0}</p>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleViewDetails(workout)}
            >
              Ver Detalhes
            </Button>
          </div>
        ))}

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum treino encontrado com os filtros aplicados</p>
          </div>
        )}
      </div>

      {/* Modal de Detalhes */}
      <WorkoutDetailModal
        workout={selectedWorkout}
        isOpen={showDetailModal}
        onClose={() => {
          setShowDetailModal(false);
          setSelectedWorkout(null);
        }}
      />
    </div>
  );
};

export default WorkoutsPage;
