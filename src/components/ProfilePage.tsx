
import React, { useState } from 'react';
import { User, Calendar, Trophy, TrendingUp, Settings, Heart, Dumbbell, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useTheme } from '@/contexts/ThemeContext';
import EditProfileModal from './EditProfileModal';

interface ProfilePageProps {
  user: { email: string; name: string; avatar?: string } | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user: initialUser }) => {
  const [user, setUser] = useState(initialUser);
  const [showEditModal, setShowEditModal] = useState(false);
  const { currentTheme, setTheme, availableThemes } = useTheme();

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

  const favoriteExercises = [
    { name: 'Supino Reto', category: 'Peito', frequency: 15 },
    { name: 'Agachamento', category: 'Pernas', frequency: 12 },
    { name: 'Puxada Frontal', category: 'Costas', frequency: 10 },
    { name: 'Desenvolvimento Militar', category: 'Ombros', frequency: 8 }
  ];

  const themeNames = {
    blue: 'Azul',
    green: 'Verde', 
    orange: 'Laranja',
    pink: 'Rosa',
    purple: 'Roxo',
    red: 'Vermelho'
  };

  const handleSaveProfile = (updatedUser: any) => {
    setUser(updatedUser);
    console.log('Perfil atualizado:', updatedUser);
  };

  const getInitials = (name: string) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header do Perfil */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              {user.avatar ? (
                <AvatarImage src={user.avatar} alt={user.name} />
              ) : (
                <AvatarFallback className="text-xl workout-gradient text-white">
                  {getInitials(user.name)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold mb-1">{user.name || 'Usuário'}</h1>
              <p className="text-muted-foreground mb-2">{user.email}</p>
              <p className="text-sm text-muted-foreground">Membro desde junho de 2025</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => setShowEditModal(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Editar Perfil
          </Button>
        </div>
      </div>

      {/* Personalização de Tema */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Personalizar Tema
        </h2>
        <p className="text-muted-foreground mb-4">Escolha a cor de destaque do ZymApp</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(availableThemes).map(([themeName, themeColors]) => (
            <button
              key={themeName}
              onClick={() => setTheme(themeName)}
              className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                currentTheme === themeName 
                  ? 'border-primary shadow-lg' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div 
                className="w-8 h-8 rounded-full mx-auto mb-2"
                style={{ background: themeColors.gradient }}
              />
              <p className="text-xs font-medium">
                {themeNames[themeName as keyof typeof themeNames]}
              </p>
            </button>
          ))}
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

      {/* Exercícios Favoritos */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Exercícios Favoritos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favoriteExercises.map((exercise, index) => (
            <div key={index} className="p-3 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">{exercise.name}</h3>
                    <p className="text-sm text-muted-foreground">{exercise.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{exercise.frequency}x</p>
                  <p className="text-xs text-muted-foreground">usado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

      {/* Modal de Edição */}
      <EditProfileModal
        user={user}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default ProfilePage;
