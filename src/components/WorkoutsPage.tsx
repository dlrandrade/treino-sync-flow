
import React from 'react';
import { Calendar, Clock, Weight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WorkoutsPage = () => {
  const workouts = [
    {
      id: 1,
      date: '2025-06-19',
      duration: 65,
      exercises: ['Supino Reto', 'Leg Press', 'Rosca Direta'],
      volume: 2850,
      sets: 12
    },
    {
      id: 2,
      date: '2025-06-17',
      duration: 58,
      exercises: ['Agachamento', 'Desenvolvimento', 'Remada'],
      volume: 3200,
      sets: 15
    },
    {
      id: 3,
      date: '2025-06-15',
      duration: 72,
      exercises: ['Deadlift', 'Pull-ups', 'Dips'],
      volume: 2950,
      sets: 10
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Histórico de Treinos</h1>
        <Button className="workout-gradient text-white">
          Filtrar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Esta Semana</span>
          </div>
          <p className="text-2xl font-bold">3 treinos</p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Tempo Total</span>
          </div>
          <p className="text-2xl font-bold">3h 15min</p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Weight className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Volume Total</span>
          </div>
          <p className="text-2xl font-bold">9,000kg</p>
        </div>
      </div>

      <div className="space-y-4">
        {workouts.map((workout) => (
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
              <Button variant="ghost" size="sm">
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
        ))}
      </div>
    </div>
  );
};

export default WorkoutsPage;
