
import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import LoginScreen from '@/components/LoginScreen';
import Dashboard from '@/components/Dashboard';
import WorkoutStart from '@/components/WorkoutStart';
import WorkoutsPage from '@/components/WorkoutsPage';
import RoutinesPage from '@/components/RoutinesPage';
import ExercisesPage from '@/components/ExercisesPage';
import ProfilePage from '@/components/ProfilePage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showWorkoutStart, setShowWorkoutStart] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Simulação de login - em produção, isso seria uma chamada para API
    if (email === 'demo@zym.com' && password === 'demo123') {
      setCurrentUser({
        email: email,
        name: 'Usuário Demo'
      });
      setIsLoggedIn(true);
    } else {
      // Para demonstração, aceita qualquer e-mail/senha válidos
      if (email.includes('@') && password.length >= 3) {
        setCurrentUser({
          email: email,
          name: email.split('@')[0]
        });
        setIsLoggedIn(true);
      } else {
        alert('Credenciais inválidas. Use demo@zym.com / demo123 ou qualquer e-mail válido.');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('dashboard');
    setShowWorkoutStart(false);
  };

  const handleStartWorkout = () => {
    setShowWorkoutStart(true);
  };

  const handleBackToDashboard = () => {
    setShowWorkoutStart(false);
  };

  const handleStartEmpty = () => {
    console.log('Iniciando treino livre');
    // Aqui implementaremos a interface de treino
  };

  const handleStartWithRoutine = (routineId: string) => {
    console.log('Iniciando treino com rotina:', routineId);
    // Aqui implementaremos a interface de treino com rotina
  };

  // Se não estiver logado, mostra a tela de login
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const renderCurrentPage = () => {
    if (showWorkoutStart) {
      return (
        <WorkoutStart 
          onBack={handleBackToDashboard}
          onStartEmpty={handleStartEmpty}
          onStartWithRoutine={handleStartWithRoutine}
        />
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onStartWorkout={handleStartWorkout} />;
      case 'workouts':
        return <WorkoutsPage />;
      case 'routines':
        return <RoutinesPage onStartWorkout={handleStartWorkout} />;
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
      onPageChange={setCurrentPage}
      onLogout={handleLogout}
    >
      {renderCurrentPage()}
    </AppLayout>
  );
};

export default Index;
