
import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Clock, Trophy, Play, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getRandomQuote } from '@/utils/motivationalQuotes';

interface DashboardProps {
  onStartWorkout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartWorkout }) => {
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    setMotivationalQuote(getRandomQuote());
    // Atualiza a frase a cada 30 segundos
    const interval = setInterval(() => {
      setMotivationalQuote(getRandomQuote());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Treinos desta semana', value: '3', icon: Calendar },
    { label: 'Tempo total', value: '4h 30min', icon: Clock },
    { label: 'Exercícios favoritos', value: '12', icon: Trophy },
    { label: 'Dias consecutivos', value: '7', icon: TrendingUp }
  ];

  const recentWorkouts = [
    { name: 'Push - Peito, Ombro, Tríceps', date: '2025-06-20', duration: '1h 15min' },
    { name: 'Pull - Costas, Bíceps', date: '2025-06-18', duration: '1h 05min' },
    { name: 'Legs - Pernas Completo', date: '2025-06-16', duration: '1h 30min' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header com frase motivacional */}
      <div className="text-center p-6 workout-gradient rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao ZymApp</h1>
        <p className="text-lg opacity-90">{motivationalQuote}</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 workout-gradient rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Ações rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Começar Treino
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Pronto para treinar? Comece agora mesmo!</p>
            <Button 
              onClick={onStartWorkout}
              className="w-full workout-gradient text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Iniciar Treino
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Progresso da Semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Meta semanal</span>
                <Badge variant="secondary">3/4 treinos</Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground">Falta apenas 1 treino para bater sua meta!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Treinos recentes */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Treinos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentWorkouts.map((workout, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                <div>
                  <h4 className="font-medium">{workout.name}</h4>
                  <p className="text-sm text-muted-foreground">{workout.date}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{workout.duration}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
