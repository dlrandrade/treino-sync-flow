
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, TrendingUp, Calendar, Trophy, Plus, Clock } from 'lucide-react';

interface DashboardProps {
  onStartWorkout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartWorkout }) => {
  // Mock data - em um app real viria do backend
  const stats = {
    totalWorkouts: 45,
    thisWeek: 4,
    totalVolume: 12450, // kg
    bestSet: 100, // kg
    streak: 7, // dias
    averageDuration: 65 // minutos
  };

  const recentWorkouts = [
    { date: '2025-06-19', name: 'Peito e Tríceps', duration: 68, volume: 2840 },
    { date: '2025-06-17', name: 'Costas e Bíceps', duration: 72, volume: 3120 },
    { date: '2025-06-15', name: 'Pernas', duration: 85, volume: 4250 }
  ];

  const handleStartWorkout = () => {
    console.log('Botão Iniciar Treino clicado no Dashboard');
    onStartWorkout();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header com Ação Principal */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-muted-foreground">Pronto para outro treino incrível?</p>
        </div>
        <Button 
          size="lg" 
          className="workout-gradient text-white hover:opacity-90 transition-opacity"
          onClick={handleStartWorkout}
        >
          <Plus className="w-5 h-5 mr-2" />
          Iniciar Treino
        </Button>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Treinos desta semana</p>
                <p className="text-3xl font-bold text-primary">{stats.thisWeek}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.totalWorkouts} total
                </p>
              </div>
              <div className="w-12 h-12 stats-gradient rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Volume Total</p>
                <p className="text-3xl font-bold text-primary">
                  {(stats.totalVolume / 1000).toFixed(1)}t
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Este mês
                </p>
              </div>
              <div className="w-12 h-12 progress-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sequência</p>
                <p className="text-3xl font-bold text-primary">{stats.streak}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  dias consecutivos
                </p>
              </div>
              <div className="w-12 h-12 workout-gradient rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Conquistas e Motivação */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Seus Recordes
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Maior carga</span>
                <span className="font-semibold">{stats.bestSet} kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Duração média</span>
                <span className="font-semibold">{stats.averageDuration} min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Melhor sequência</span>
                <span className="font-semibold">14 dias</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Treinos Recentes
            </h3>
            <div className="space-y-3">
              {recentWorkouts.map((workout, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{workout.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {workout.date} • {workout.duration}min
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{(workout.volume / 1000).toFixed(1)}t</p>
                    <p className="text-xs text-muted-foreground">volume</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Motivational Quote */}
      <Card className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
        <CardContent className="p-6 text-center">
          <div className="workout-gradient rounded-lg p-6 text-white">
            <Dumbbell className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <blockquote className="text-lg font-medium mb-2">
              "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta."
            </blockquote>
            <cite className="text-sm opacity-80">- Winston Churchill</cite>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
