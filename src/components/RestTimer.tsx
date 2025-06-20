
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface RestTimerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTime?: number;
}

const RestTimer: React.FC<RestTimerProps> = ({ 
  isOpen, 
  onClose, 
  defaultTime = 90 
}) => {
  const [time, setTime] = useState(defaultTime);
  const [originalTime, setOriginalTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [customTime, setCustomTime] = useState(defaultTime.toString());
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            toast('Tempo de descanso finalizado!');
            // Opcional: tocar som de notificação
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(originalTime);
  };

  const handleSetCustomTime = () => {
    const newTime = parseInt(customTime) || defaultTime;
    setTime(newTime);
    setOriginalTime(newTime);
    setShowSettings(false);
    toast(`Tempo de descanso ajustado para ${formatTime(newTime)}`);
  };

  const presetTimes = [30, 60, 90, 120, 180];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center">
            {showSettings ? 'Ajustar Tempo' : 'Tempo de Descanso'}
          </DialogTitle>
        </DialogHeader>

        {!showSettings ? (
          <div className="space-y-6 text-center">
            {/* Timer Display */}
            <div className="relative">
              <div className="text-6xl font-mono font-bold text-primary">
                {formatTime(time)}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {time === 0 ? 'Tempo finalizado!' : isRunning ? 'Em andamento...' : 'Pausado'}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-accent rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${originalTime > 0 ? ((originalTime - time) / originalTime) * 100 : 0}%` 
                }}
              />
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                disabled={time === originalTime}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={isRunning ? handlePause : handleStart}
                disabled={time === 0}
                className="px-8"
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Iniciar
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            {time === 0 && (
              <Button
                onClick={onClose}
                className="w-full workout-gradient text-white"
              >
                Continuar Treino
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Preset Times */}
            <div>
              <h4 className="font-medium mb-3">Tempos pré-definidos:</h4>
              <div className="grid grid-cols-3 gap-2">
                {presetTimes.map((preset) => (
                  <Button
                    key={preset}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCustomTime(preset.toString());
                      setTime(preset);
                      setOriginalTime(preset);
                      setShowSettings(false);
                    }}
                  >
                    {formatTime(preset)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom Time */}
            <div>
              <h4 className="font-medium mb-2">Tempo personalizado (segundos):</h4>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={customTime}
                  onChange={(e) => setCustomTime(e.target.value)}
                  placeholder="90"
                  min="1"
                  max="600"
                />
                <Button onClick={handleSetCustomTime}>
                  Definir
                </Button>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowSettings(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RestTimer;
