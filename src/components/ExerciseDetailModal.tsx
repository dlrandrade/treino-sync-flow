
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Clock, Target, User, Dumbbell, Play, Image, Heart } from 'lucide-react';

interface Exercise {
  id: number;
  name: string;
  category: string;
  equipment: string;
  difficulty: string;
  mediaType?: 'image' | 'video';
  mediaUrl?: string;
}

interface ExerciseDetailModalProps {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite?: (exerciseId: number) => void;
  isFavorite?: boolean;
}

const ExerciseDetailModal: React.FC<ExerciseDetailModalProps> = ({ 
  exercise, 
  isOpen, 
  onClose,
  onToggleFavorite,
  isFavorite = false
}) => {
  if (!exercise) return null;

  const difficultyColor = {
    'Básico': 'bg-green-100 text-green-800',
    'Intermediário': 'bg-yellow-100 text-yellow-800',
    'Avançado': 'bg-red-100 text-red-800'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 workout-gradient rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            {exercise.name}
            {onToggleFavorite && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleFavorite(exercise.id)}
                className={`ml-auto ${isFavorite ? 'text-red-500' : 'text-muted-foreground'}`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Media Section */}
          {exercise.mediaUrl && (
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <video 
                src={exercise.mediaUrl} 
                className="w-full h-full object-cover"
                controls
                muted
                loop
              />
              <div className="absolute top-4 right-4">
                <div className="bg-black/60 text-white p-2 rounded-full flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  <span className="text-sm">Vídeo demonstrativo</span>
                </div>
              </div>
            </div>
          )}

          {/* Informações básicas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Categoria</span>
              </div>
              <p className="capitalize font-semibold">{exercise.category}</p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Equipamento</span>
              </div>
              <p className="font-semibold">{exercise.equipment}</p>
            </div>

            <div className="p-4 bg-card rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Dificuldade</span>
              </div>
              <Badge className={difficultyColor[exercise.difficulty as keyof typeof difficultyColor]}>
                {exercise.difficulty}
              </Badge>
            </div>
          </div>

          {/* Descrição e instruções */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Descrição</h3>
              <p className="text-muted-foreground">
                Este exercício é excelente para trabalhar a musculatura da categoria {exercise.category.toLowerCase()}, 
                utilizando {exercise.equipment.toLowerCase()} e adequado para praticantes de nível {exercise.difficulty.toLowerCase()}.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Como executar</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Posicione-se corretamente com o equipamento</li>
                <li>Mantenha a postura adequada durante todo o movimento</li>
                <li>Execute o movimento de forma controlada</li>
                <li>Respire adequadamente durante a execução</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Dicas importantes</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Aqueça adequadamente antes de iniciar</li>
                <li>Comece com cargas menores se for iniciante</li>
                <li>Foque na técnica antes de aumentar a intensidade</li>
                <li>Descanse adequadamente entre as séries</li>
              </ul>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button className="flex-1 workout-gradient text-white">
              Adicionar ao Treino
            </Button>
            {onToggleFavorite && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => onToggleFavorite(exercise.id)}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
                {isFavorite ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseDetailModal;
