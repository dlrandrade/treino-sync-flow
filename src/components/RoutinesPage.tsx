
import React from 'react';
import { Plus, Calendar, Clock, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RoutinesPageProps {
  onStartWorkout: () => void;
}

const RoutinesPage: React.FC<RoutinesPageProps> = ({ onStartWorkout }) => {
  const routines = [
    {
      id: 1,
      name: 'Push - Peito, Ombro, Tríceps',
      exercises: ['Supino Reto', 'Desenvolvimento', 'Tríceps Testa', 'Elevação Lateral'],
      estimatedTime: 60,
      lastUsed: '2025-06-17'
    },
    {
      id: 2,
      name: 'Pull - Costas, Bíceps',
      exercises: ['Puxada', 'Remada', 'Rosca Direta', 'Rosca Martelo'],
      estimatedTime: 55,
      lastUsed: '2025-06-15'
    },
    {
      id: 3,
      name: 'Legs - Pernas Completo',
      exercises: ['Agachamento', 'Leg Press', 'Cadeira Extensora', 'Mesa Flexora'],
      estimatedTime: 70,
      lastUsed: '2025-06-13'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Suas Rotinas</h1>
        <Button className="workout-gradient text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Rotina
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routines.map((routine) => (
          <div key={routine.id} className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 stats-gradient rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <Button variant="ghost" size="sm">
                ⋯
              </Button>
            </div>

            <h3 className="font-semibold mb-2">{routine.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {routine.exercises.length} exercícios
            </p>

            <div className="space-y-2 mb-4">
              {routine.exercises.slice(0, 3).map((exercise, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  • {exercise}
                </div>
              ))}
              {routine.exercises.length > 3 && (
                <div className="text-sm text-muted-foreground">
                  +{routine.exercises.length - 3} mais
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>~{routine.estimatedTime}min</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(routine.lastUsed).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>

            <Button 
              onClick={onStartWorkout}
              className="w-full"
              variant="outline"
            >
              Iniciar Treino
            </Button>
          </div>
        ))}

        {/* Card para criar nova rotina */}
        <div className="bg-card p-6 rounded-lg border border-dashed border-border hover:border-primary/50 transition-colors">
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Criar Nova Rotina</h3>
              <p className="text-sm text-muted-foreground">
                Monte uma rotina personalizada com seus exercícios favoritos
              </p>
            </div>
            <Button variant="ghost" className="text-primary">
              Começar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinesPage;
