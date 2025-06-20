
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Dumbbell, TrendingUp, Target } from 'lucide-react';

interface WorkoutDetailModalProps {
  workout: any;
  isOpen: boolean;
  onClose: () => void;
}

const WorkoutDetailModal: React.FC<WorkoutDetailModalProps> = ({ 
  workout, 
  isOpen, 
  onClose 
}) => {
  if (!workout) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'bg-green-100 text-green-800';
      case 'Em andamento': return 'bg-blue-100 text-blue-800';
      case 'Cancelado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-10 h-10 workout-gradient rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            {workout.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações básicas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Data</span>
              </div>
              <p className="font-semibold">{new Date(workout.date).toLocaleDateString('pt-BR')}</p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Duração</span>
              </div>
              <p className="font-semibold">{workout.duration}</p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Status</span>
              </div>
              <Badge className={getStatusColor(workout.status)}>
                {workout.status}
              </Badge>
            </div>
          </div>

          {/* Exercícios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Exercícios Realizados</h3>
            <div className="space-y-3">
              {workout.exercises?.map((exercise: any, index: number) => (
                <div key={index} className="p-4 bg-accent/20 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{exercise.name}</h4>
                    <Badge variant="outline">{exercise.sets} séries</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="block font-medium">Peso</span>
                      <span>{exercise.weight}kg</span>
                    </div>
                    <div>
                      <span className="block font-medium">Repetições</span>
                      <span>{exercise.reps}</span>
                    </div>
                    <div>
                      <span className="block font-medium">Volume</span>
                      <span>{exercise.volume}kg</span>
                    </div>
                  </div>
                </div>
              )) || (
                <div className="text-center py-8 text-muted-foreground">
                  Nenhum exercício registrado
                </div>
              )}
            </div>
          </div>

          {/* Estatísticas */}
          <div className="bg-accent/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Estatísticas do Treino
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Volume Total</p>
                <p className="text-xl font-bold text-primary">{workout.totalVolume || '2,850kg'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Séries Completadas</p>
                <p className="text-xl font-bold text-primary">{workout.completedSets || '15'}</p>
              </div>
            </div>
          </div>

          {/* Notas */}
          {workout.notes && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Notas</h3>
              <p className="text-muted-foreground p-3 bg-accent/20 rounded-lg">
                {workout.notes}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Fechar
            </Button>
            {workout.status === 'Concluído' && (
              <Button className="flex-1 workout-gradient text-white">
                Repetir Treino
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutDetailModal;
