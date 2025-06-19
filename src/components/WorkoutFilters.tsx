
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Clock, Weight, TrendingUp } from 'lucide-react';

interface WorkoutFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
  currentFilters: any;
}

const WorkoutFilters: React.FC<WorkoutFiltersProps> = ({ 
  isOpen, 
  onClose, 
  onApplyFilters,
  currentFilters 
}) => {
  const [filters, setFilters] = React.useState(currentFilters);

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      dateRange: 'all',
      exerciseTypes: [],
      durationRange: 'all',
      volumeRange: 'all'
    };
    setFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                    checked={filters.dateRange === option.value}
                    onCheckedChange={() => setFilters({...filters, dateRange: option.value})}
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
                'Peito', 'Costas', 'Pernas', 'Ombros', 'Braços', 'Core'
              ].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.exerciseTypes.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setFilters({
                          ...filters,
                          exerciseTypes: [...filters.exerciseTypes, type]
                        });
                      } else {
                        setFilters({
                          ...filters,
                          exerciseTypes: filters.exerciseTypes.filter((t: string) => t !== type)
                        });
                      }
                    }}
                  />
                  <Label htmlFor={type} className="text-sm">
                    {type}
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
                { value: 'medium', label: '45-75 min' },
                { value: 'long', label: 'Mais de 75 min' }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`duration-${option.value}`}
                    checked={filters.durationRange === option.value}
                    onCheckedChange={() => setFilters({...filters, durationRange: option.value})}
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
