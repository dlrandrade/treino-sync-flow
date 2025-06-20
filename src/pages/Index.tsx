
import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import LoginScreen from '@/components/LoginScreen';
import Dashboard from '@/components/Dashboard';
import WorkoutStart from '@/components/WorkoutStart';
import ActiveWorkout from '@/components/ActiveWorkout';
import WorkoutsPage from '@/components/WorkoutsPage';
import RoutinesPage from '@/components/RoutinesPage';
import ExercisesPage from '@/components/ExercisesPage';
import ProfilePage from '@/components/ProfilePage';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showWorkoutStart, setShowWorkoutStart] = useState(false);
  const [activeWorkout, setActiveWorkout] = useState<{ routineId?: number; routineName?: string } | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Simulação de login - em produção, isso seria uma chamada para API
    if (email === 'demo@zym.com' && password === 'demo123') {
      setCurrentUser({
        email: email,
        name: 'Usuário Demo'
      });
      setIsLoggedIn(true);
      toast('Login realizado com sucesso!');
    } else {
      // Para demonstração, aceita qualquer e-mail/senha válidos
      if (email.includes('@') && password.length >= 3) {
        setCurrentUser({
          email: email,
          name: email.split('@')[0]
        });
        setIsLoggedIn(true);
        toast('Login realizado com sucesso!');
      } else {
        toast('Credenciais inválidas. Use demo@zym.com / demo123 ou qualquer e-mail válido.');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('dashboard');
    setShowWorkoutStart(false);
    setActiveWorkout(null);
    toast('Logout realizado com sucesso!');
  };

  const handleStartWorkout = () => {
    console.log('Iniciando interface de treino');
    setShowWorkoutStart(true);
  };

  const handleStartWorkoutWithRoutine = (routineId: number, routineName: string) => {
    console.log('Iniciando treino com rotina:', routineId, routineName);
    setActiveWorkout({ routineId, routineName });
    setShowWorkoutStart(false);
    toast(`Treino iniciado: ${routineName}`);
  };

  const handleBackToDashboard = () => {
    console.log('Voltando ao dashboard');
    setShowWorkoutStart(false);
  };

  const handleStartEmpty = () => {
    console.log('Iniciando treino livre');
    setActiveWorkout({});
    setShowWorkoutStart(false);
    toast('Treino livre iniciado!');
  };

  const handleStartWithRoutine = (routineId: string) => {
    console.log('Iniciando treino com rotina:', routineId);
    const routineNames = {
      '1': 'Push - Peito, Ombro, Tríceps',
      '2': 'Pull - Costas, Bíceps',
      '3': 'Legs - Pernas Completo'
    };
    const routineName = routineNames[routineId as keyof typeof routineNames] || 'Rotina Personalizada';
    
    setActiveWorkout({ routineId: Number(routineId), routineName });
    setShowWorkoutStart(false);
    toast(`Treino iniciado: ${routineName}`);
  };

  const handleFinishWorkout = () => {
    console.log('Treino finalizado');
    setActiveWorkout(null);
    setCurrentPage('dashboard');
  };

  const handleCancelWorkout = () => {
    console.log('Treino cancelado');
    setActiveWorkout(null);
    setCurrentPage('dashboard');
  };

  // Se não estiver logado, mostra a tela de login
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderCurrentPage = () => {
    // Se há um treino ativo, mostra a interface de treino
    if (activeWorkout) {
      return (
        <ActiveWorkout
          routineId={activeWorkout.routineId}
          routineName={activeWorkout.routineName}
          onFinish={handleFinishWorkout}
          onCancel={handleCancelWorkout}
        />
      );
    }

    // Se está na tela de início de treino
    if (showWorkoutStart) {
      return (
        <WorkoutStart 
          onBack={handleBackToDashboard}
          onStartEmpty={handleStartEmpty}
          onStartWithRoutine={handleStartWithRoutine}
        />
      );
    }

    // Páginas normais
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onStartWorkout={handleStartWorkout} />;
      case 'workouts':
        return <WorkoutsPage onStartWorkout={handleStartWorkout} />;
      case 'routines':
        return (
          <RoutinesPage 
            onStartWorkout={handleStartWorkout}
            onStartWorkoutWithRoutine={handleStartWorkoutWithRoutine}
          />
        );
      case 'exercises':
        return <ExercisesPage />;
      case 'profile':
        return <ProfilePage user={currentUser} />;
      default:
        return <Dashboard onStartWorkout={handleStartWorkout} />;
    }
  };

  return (
    <AppLayout 
      currentPage={currentPage} 
      onPageChange={(page) => {
        console.log('Navegando para:', page);
        setCurrentPage(page);
        setShowWorkoutStart(false); // Volta ao conteúdo principal quando navega
        setActiveWorkout(null); // Cancela treino ativo se navegar
      }}
      onLogout={handleLogout}
    >
      {renderCurrentPage()}
    </AppLayout>
  );
};

export default Index;
