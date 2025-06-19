
import React from 'react';
import { User, Calendar, Trophy, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfilePageProps {
  user: { email: string; name: string } | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const stats = [
    { label: 'Treinos Realizados', value: '47', icon: Calendar },
    { label: 'Dias Consecutivos', value: '12', icon: TrendingUp },
    { label: 'Volume Total', value: '125,400kg', icon: Trophy },
    { label: 'Tempo Total', value: '58h 30min', icon: Calendar }
  ];

  const achievements = [
    { title: 'Primeiro Treino', description: 'Completou seu primeiro treino', earned: true },
    { title: 'Semana Completa', description: 'Treinou 7 dias seguidos', earned: true },
    { title: 'Mestre do Volume', description: 'Atingiu 100,000kg de volume total', earned: true },
    { title: 'Maratonista', description: 'Treinou por mais de 2 horas', earned: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header do Perfil */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">{user?.name || 'Usuário'}</h1>
              <p className="text-muted-foreground mb-2">{user?.email}</p>
              <p className="text-sm text-muted-foreground">Membro desde junho de 2025</p>
            </div>
          </div>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Editar Perfil
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
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Conquistas */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-4">Conquistas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border ${
                achievement.earned 
                  ? 'border-primary/50 bg-primary/5' 
                  : 'border-border bg-muted/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.earned 
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progresso Recente */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-4">Progresso Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
            <div>
              <p className="font-medium">Supino Reto</p>
              <p className="text-sm text-muted-foreground">Novo recorde pessoal!</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-primary">85kg</p>
              <p className="text-xs text-muted-foreground">+5kg</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
            <div>
              <p className="font-medium">Agachamento</p>
              <p className="text-sm text-muted-foreground">Melhor volume da semana</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-primary">120kg</p>
              <p className="text-xs text-muted-foreground">+10kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
