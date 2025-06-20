
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Clock, Weight, TrendingUp } from 'lucide-react';

interface WorkoutFiltersProps {
  isOpen: boolean;
  filters: {
    period: string;
    exerciseType: string;
    duration: string;
  };
  onFiltersChange: (filters: { period: string; exerciseType: string; duration: string; }) => void;
}

const WorkoutFilters: React.FC<WorkoutFiltersProps> = ({ 
  isOpen, 
  filters,
  onFiltersChange
}) => {
  const [localFilters, setLocalFilters] = React.useState(filters);

  React.useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApply = () => {
    onFiltersChange(localFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      period: 'all',
      exerciseType: 'all',
      duration: 'all'
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Filtrar Treinos
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Período */}
          <div>
            <Label className="text-base font-medium">Período</Label>
            <div className="mt-2 space-y-2">
              {[
                { value: 'all', label: 'Todos os treinos' },
                { value: 'week', label: 'Última semana' },
                { value: 'month', label: 'Último mês' },
                { value: '3months', label: 'Últimos 3 meses' }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={localFilters.period === option.value}
                    onCheckedChange={() => setLocalFilters({...localFilters, period: option.value})}
                  />
                  <Label htmlFor={option.value} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Tipos de Exercício */}
          <div>
            <Label className="text-base font-medium">Tipos de Exercício</Label>
            <div className="mt-2 space-y-2">
              {[
                { value: 'all', label: 'Todos os tipos' },
                { value: 'strength', label: 'Musculação' },
                { value: 'cardio', label: 'Cardio' }
              ].map((type) => (
                <div key={type.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={type.value}
                    checked={localFilters.exerciseType === type.value}
                    onCheckedChange={() => setLocalFilters({...localFilters, exerciseType: type.value})}
                  />
                  <Label htmlFor={type.value} className="text-sm">
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Duração */}
          <div>
            <Label className="text-base font-medium">Duração</Label>
            <div className="mt-2 space-y-2">
              {[
                { value: 'all', label: 'Qualquer duração' },
                { value: 'short', label: 'Até 45 min' },
                { value: 'medium', label: '45-90 min' },
                { value: 'long', label: 'Mais de 90 min' }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`duration-${option.value}`}
                    checked={localFilters.duration === option.value}
                    onCheckedChange={() => setLocalFilters({...localFilters, duration: option.value})}
                  />
                  <Label htmlFor={`duration-${option.value}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={handleReset} className="flex-1">
              Limpar
            </Button>
            <Button onClick={handleApply} className="flex-1 workout-gradient text-white">
              Aplicar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutFilters;
