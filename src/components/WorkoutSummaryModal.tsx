
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, TrendingUp, Share2, Download } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface WorkoutSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  workoutData: {
    name: string;
    duration: string;
    exercises: number;
    sets: number;
    volume: string;
    personalRecords?: number;
  };
}

const WorkoutSummaryModal: React.FC<WorkoutSummaryModalProps> = ({
  isOpen,
  onClose,
  workoutData
}) => {
  const handleShare = async () => {
    const shareText = `🔥 Acabei de completar meu treino no ZymApp!\n\n💪 ${workoutData.name}\n⏱️ Duração: ${workoutData.duration}\n🏋️ ${workoutData.exercises} exercícios, ${workoutData.sets} séries\n📊 Volume total: ${workoutData.volume}\n\n#ZymApp #Treino #Fitness`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meu Treino no ZymApp',
          text: shareText,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback para dispositivos sem Web Share API
      await navigator.clipboard.writeText(shareText);
      toast('Resumo copiado para a área de transferência!');
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `RESUMO DO TREINO - ZYMAPP\n\n` +
      `Treino: ${workoutData.name}\n` +
      `Data: ${new Date().toLocaleDateString('pt-BR')}\n` +
      `Duração: ${workoutData.duration}\n` +
      `Exercícios: ${workoutData.exercises}\n` +
      `Séries: ${workoutData.sets}\n` +
      `Volume Total: ${workoutData.volume}\n` +
      (workoutData.personalRecords ? `Recordes Pessoais: ${workoutData.personalRecords}\n` : '') +
      `\nParabéns pelo treino! 💪\n\nGerado pelo ZymApp`
    ], { type: 'text/plain' });
    
    element.href = URL.createObjectURL(file);
    element.download = `treino_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast('Resumo baixado com sucesso!');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Treino Concluído!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Congratulations */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 workout-gradient rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Parabéns! 🎉</h3>
            <p className="text-muted-foreground">Você completou mais um treino incrível!</p>
          </div>

          {/* Workout Summary */}
          <div className="bg-accent/20 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-center">{workoutData.name}</h4>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-medium">{workoutData.duration}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Volume:</span>
                <span className="font-medium">{workoutData.volume}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-border">
              <div className="text-center">
                <p className="text-lg font-bold">{workoutData.exercises}</p>
                <p className="text-xs text-muted-foreground">Exercícios</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{workoutData.sets}</p>
                <p className="text-xs text-muted-foreground">Séries</p>
              </div>
              {workoutData.personalRecords && (
                <div className="text-center">
                  <p className="text-lg font-bold text-yellow-600">{workoutData.personalRecords}</p>
                  <p className="text-xs text-muted-foreground">Recordes</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={handleShare} className="w-full" variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar Resultado
            </Button>
            
            <Button onClick={handleDownload} className="w-full" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Baixar Resumo
            </Button>
            
            <Button onClick={onClose} className="w-full workout-gradient text-white">
              Finalizar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutSummaryModal;
