
import React, { useState } from 'react';
import { Plus, Calendar, Clock, Dumbbell, Edit, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/sonner';
import CreateRoutineModal from './CreateRoutineModal';
import EditRoutineModal from './EditRoutineModal';

interface RoutinesPageProps {
  onStartWorkout: () => void;
  onStartWorkoutWithRoutine: (routineId: number, routineName: string) => void;
}

const RoutinesPage: React.FC<RoutinesPageProps> = ({ onStartWorkout, onStartWorkoutWithRoutine }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [routines, setRoutines] = useState([
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
  ]);

  const handleCreateNewRoutine = () => {
    console.log('Abrindo modal para criar nova rotina');
    setShowCreateModal(true);
  };

  const handleEditRoutine = (routine: any) => {
    console.log('Editando rotina:', routine.name);
    setSelectedRoutine(routine);
    setShowEditModal(true);
  };

  const handleCreateRoutine = (newRoutine: any) => {
    setRoutines(prev => [...prev, newRoutine]);
    console.log('Nova rotina criada:', newRoutine);
  };

  const handleSaveRoutine = (updatedRoutine: any) => {
    setRoutines(prev => prev.map(routine => 
      routine.id === updatedRoutine.id ? updatedRoutine : routine
    ));
    console.log('Rotina atualizada:', updatedRoutine);
  };

  const handleDeleteRoutine = (routineId: number) => {
    setRoutines(prev => prev.filter(routine => routine.id !== routineId));
    toast('Rotina excluída com sucesso!');
  };

  const handleStartWorkoutWithRoutine = (routineId: number, routineName: string) => {
    console.log('Iniciando treino com rotina:', routineId, routineName);
    toast(`Iniciando treino: ${routineName}`);
    onStartWorkoutWithRoutine(routineId, routineName);
  };

  const handleQuickStart = () => {
    console.log('Iniciando treino rápido');
    toast('Iniciando treino livre!');
    onStartWorkout();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Suas Rotinas</h1>
        <Button onClick={handleCreateNewRoutine} className="workout-gradient text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Rotina
        </Button>
      </div>

      {/* Quick Start Card */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 workout-gradient rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Começar Agora</h3>
              <p className="text-muted-foreground">
                Inicie um treino livre sem rotina específica
              </p>
            </div>
          </div>
          <Button 
            onClick={handleQuickStart}
            className="workout-gradient text-white hover:opacity-90"
            size="lg"
          >
            Começar Treino Livre
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routines.map((routine) => (
          <div key={routine.id} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 stats-gradient rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEditRoutine(routine)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDeleteRoutine(routine.id)}
                    className="text-red-600"
                  >
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
              onClick={() => handleStartWorkoutWithRoutine(routine.id, routine.name)}
              className="w-full workout-gradient text-white hover:opacity-90"
            >
              Iniciar Treino
            </Button>
          </div>
        ))}

        {/* Card para criar nova rotina */}
        <div 
          className="bg-card p-6 rounded-lg border border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer"
          onClick={handleCreateNewRoutine}
        >
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

      {/* Modal de Criação */}
      <CreateRoutineModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateRoutine={handleCreateRoutine}
      />

      {/* Modal de Edição */}
      <EditRoutineModal
        routine={selectedRoutine}
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedRoutine(null);
        }}
        onSave={handleSaveRoutine}
      />
    </div>
  );
};

export default RoutinesPage;
