
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Clock, Plus, Check, X, Play, Pause } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import RestTimer from './RestTimer';

interface Exercise {
  id: number;
  name: string;
  sets: Set[];
}

interface Set {
  id: number;
  reps: number;
  weight: number;
  completed: boolean;
}

interface ActiveWorkoutProps {
  routineId?: number;
  routineName?: string;
  onFinish: () => void;
  onCancel: () => void;
}

const ActiveWorkout: React.FC<ActiveWorkoutProps> = ({ 
  routineId, 
  routineName, 
  onFinish, 
  onCancel 
}) => {
  const [isRunning, setIsRunning] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [showRestTimer, setShowRestTimer] = useState(false);
  const [defaultRestTime, setDefaultRestTime] = useState(90);

  useEffect(() => {
    // Simula exercícios baseados na rotina ou treino livre
    const mockExercises = routineId ? 
      getExercisesForRoutine(routineId) : 
      getDefaultExercises();
    
    setExercises(mockExercises);
  }, [routineId]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const getExercisesForRoutine = (id: number) => {
    const routineExercises = {
      1: [
        { id: 1, name: 'Supino Reto', sets: createDefaultSets() },
        { id: 2, name: 'Desenvolvimento', sets: createDefaultSets() },
        { id: 3, name: 'Tríceps Testa', sets: createDefaultSets() }
      ],
      2: [
        { id: 4, name: 'Puxada', sets: createDefaultSets() },
        { id: 5, name: 'Remada', sets: createDefaultSets() },
        { id: 6, name: 'Rosca Direta', sets: createDefaultSets() }
      ],
      3: [
        { id: 7, name: 'Agachamento', sets: createDefaultSets() },
        { id: 8, name: 'Leg Press', sets: createDefaultSets() },
        { id: 9, name: 'Cadeira Extensora', sets: createDefaultSets() }
      ]
    };
    return routineExercises[id as keyof typeof routineExercises] || getDefaultExercises();
  };

  const getDefaultExercises = () => [
    { id: 1, name: 'Exercício Livre 1', sets: createDefaultSets() },
    { id: 2, name: 'Exercício Livre 2', sets: createDefaultSets() }
  ];

  const createDefaultSets = (): Set[] => [
    { id: 1, reps: 10, weight: 0, completed: false },
    { id: 2, reps: 10, weight: 0, completed: false },
    { id: 3, reps: 10, weight: 0, completed: false }
  ];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return hours > 0 
      ? `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      : `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleSet = (exerciseId: number, setId: number) => {
    setExercises(prev => prev.map(exercise => 
      exercise.id === exerciseId 
        ? {
            ...exercise,
            sets: exercise.sets.map(set => 
              set.id === setId 
                ? { ...set, completed: !set.completed }
                : set
            )
          }
        : exercise
    ));

    // Abrir timer de descanso quando completar uma série
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const set = exercise?.sets.find(s => s.id === setId);
    
    if (set && !set.completed) {
      console.log('Série completada, iniciando timer de descanso');
      setShowRestTimer(true);
    }
  };

  const updateSetWeight = (exerciseId: number, setId: number, weight: number) => {
    setExercises(prev => prev.map(exercise => 
      exercise.id === exerciseId 
        ? {
            ...exercise,
            sets: exercise.sets.map(set => 
              set.id === setId 
                ? { ...set, weight }
                : set
            )
          }
        : exercise
    ));
  };

  const updateSetReps = (exerciseId: number, setId: number, reps: number) => {
    setExercises(prev => prev.map(exercise => 
      exercise.id === exerciseId 
        ? {
            ...exercise,
            sets: exercise.sets.map(set => 
              set.id === setId 
                ? { ...set, reps }
                : set
            )
          }
        : exercise
    ));
  };

  const addSetToExercise = (exerciseId: number) => {
    setExercises(prev => prev.map(exercise => 
      exercise.id === exerciseId 
        ? {
            ...exercise,
            sets: [...exercise.sets, {
              id: exercise.sets.length + 1,
              reps: 10,
              weight: 0,
              completed: false
            }]
          }
        : exercise
    ));
    toast('Nova série adicionada!');
  };

  const addExercise = () => {
    const newExercise: Exercise = {
      id: exercises.length + 1,
      name: `Novo Exercício ${exercises.length + 1}`,
      sets: createDefaultSets()
    };
    setExercises(prev => [...prev, newExercise]);
    toast('Novo exercício adicionado!');
  };

  const finishWorkout = () => {
    const completedSets = exercises.reduce((total, ex) => 
      total + ex.sets.filter(set => set.completed).length, 0
    );
    
    console.log('Treino finalizado:', {
      duration: elapsedTime,
      exercises: exercises.length,
      completedSets,
      routineId,
      routineName
    });

    toast(`Treino finalizado! ${completedSets} séries completadas em ${formatTime(elapsedTime)}`);
    onFinish();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">
              {routineName || 'Treino Livre'}
            </h1>
            <p className="text-muted-foreground">Em andamento</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-lg font-mono">
            <Clock className="w-5 h-5" />
            {formatTime(elapsedTime)}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Exercises */}
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">{exercise.name}</h3>
            
            <div className="space-y-3">
              {exercise.sets.map((set, index) => (
                <div key={set.id} className="flex items-center gap-4">
                  <span className="w-8 text-center text-sm text-muted-foreground">
                    {index + 1}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Peso"
                      value={set.weight || ''}
                      onChange={(e) => updateSetWeight(exercise.id, set.id, Number(e.target.value))}
                      className="w-20"
                    />
                    <span className="text-sm">kg</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Reps"
                      value={set.reps || ''}
                      onChange={(e) => updateSetReps(exercise.id, set.id, Number(e.target.value))}
                      className="w-20"
                    />
                    <span className="text-sm">reps</span>
                  </div>
                  
                  <Button
                    variant={set.completed ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSet(exercise.id, set.id)}
                    className={set.completed ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {set.completed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </Button>
                </div>
              ))}
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => addSetToExercise(exercise.id)}
                className="w-full mt-2 border-dashed border-2"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Série
              </Button>
            </div>
          </div>
        ))}
        
        <Button variant="outline" onClick={addExercise} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Exercício
        </Button>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t">
        <Button variant="outline" onClick={onCancel} className="flex-1">
          Cancelar Treino
        </Button>
        <Button onClick={finishWorkout} className="flex-1 workout-gradient text-white">
          Finalizar Treino
        </Button>
      </div>

      {/* Rest Timer */}
      <RestTimer
        isOpen={showRestTimer}
        onClose={() => setShowRestTimer(false)}
        defaultTime={defaultRestTime}
      />
    </div>
  );
};

export default ActiveWorkout;
