
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Dumbbell, Calendar, Clock, Users } from 'lucide-react';

interface WorkoutStartProps {
  onBack: () => void;
  onStartEmpty: () => void;
  onStartWithRoutine: (routineId: string) => void;
}

const WorkoutStart: React.FC<WorkoutStartProps> = ({ 
  onBack, 
  onStartEmpty, 
  onStartWithRoutine 
}) => {
  // Mock routines - em um app real viria do backend
  const routines = [
    {
      id: '1',
      name: 'Peito e Tríceps',
      exercises: ['Supino Reto', 'Supino Inclinado', 'Tríceps Testa', 'Tríceps Corda'],
      lastUsed: '2025-06-15',
      avgDuration: 68
    },
    {
      id: '2', 
      name: 'Costas e Bíceps',
      exercises: ['Puxada Frontal', 'Remada Curvada', 'Rosca Direta', 'Rosca Martelo'],
      lastUsed: '2025-06-12',
      avgDuration: 72
    },
    {
      id: '3',
      name: 'Pernas',
      exercises: ['Agachamento', 'Leg Press', 'Extensora', 'Flexora'],
      lastUsed: '2025-06-10',
      avgDuration: 85
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Iniciar Treino</h1>
          <p className="text-muted-foreground">Escolha como começar sua sessão</p>
        </div>
      </div>

      {/* Quick Start Option */}
      <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 workout-gradient rounded-xl flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Treino Livre</h3>
                <p className="text-muted-foreground">
                  Comece um treino em branco e adicione exercícios conforme faz
                </p>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={onStartEmpty}
              className="workout-gradient text-white hover:opacity-90"
            >
              <Dumbbell className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Routines Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Suas Rotinas
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {routines.map((routine, index) => (
            <Card 
              key={routine.id} 
              className="animate-slide-in hover:shadow-lg transition-shadow cursor-pointer"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onClick={() => onStartWithRoutine(routine.id)}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span>{routine.name}</span>
                  <Button 
                    size="sm" 
                    className="stats-gradient text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartWithRoutine(routine.id);
                    }}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{routine.exercises.length} exercícios</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>~{routine.avgDuration} min</span>
                  </div>

                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">Exercícios:</p>
                    <p className="text-foreground">
                      {routine.exercises.slice(0, 2).join(', ')}
                      {routine.exercises.length > 2 && ` +${routine.exercises.length - 2} mais`}
                    </p>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Último uso: {routine.lastUsed}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Create New Routine CTA */}
      <Card className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
        <CardContent className="p-6 text-center">
          <div className="progress-gradient rounded-lg p-6 text-white">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-semibold mb-2">Ainda não tem rotinas?</h3>
            <p className="mb-4 opacity-90">
              Crie suas próprias rotinas para treinos mais organizados e eficientes
            </p>
            <Button variant="secondary" size="lg">
              Criar Primeira Rotina
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutStart;
