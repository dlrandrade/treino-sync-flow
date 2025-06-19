
import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Dashboard from '@/components/Dashboard';
import WorkoutStart from '@/components/WorkoutStart';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showWorkoutStart, setShowWorkoutStart] = useState(false);

  const handleStartWorkout = () => {
    setShowWorkoutStart(true);
  };

  const handleBackToDashboard = () => {
    setShowWorkoutStart(false);
  };

  const handleStartEmpty = () => {
    // Aqui implementaremos a interface de treino
    console.log('Iniciando treino livre');
  };

  const handleStartWithRoutine = (routineId: string) => {
    // Aqui implementaremos a interface de treino com rotina
    console.log('Iniciando treino com rotina:', routineId);
  };

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
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Histórico de Treinos</h2>
            <p className="text-muted-foreground">Em breve: visualize todos os seus treinos</p>
          </div>
        );
      case 'routines':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Suas Rotinas</h2>
            <p className="text-muted-foreground">Em breve: crie e gerencie suas rotinas</p>
          </div>
        );
      case 'exercises':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Biblioteca de Exercícios</h2>
            <p className="text-muted-foreground">Em breve: explore exercícios e crie personalizados</p>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Seu Perfil</h2>
            <p className="text-muted-foreground">Em breve: gerencie suas informações pessoais</p>
          </div>
        );
      default:
        return <Dashboard onStartWorkout={handleStartWorkout} />;
    }
  };

  return (
    <AppLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </AppLayout>
  );
};

export default Index;
