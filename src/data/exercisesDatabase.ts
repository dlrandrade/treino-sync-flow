
// Base de dados expandida de exercícios com vídeos funcionais
export const exercisesDatabase = [
  // PEITO (15 exercícios)
  { 
    id: 1, 
    name: 'Supino Reto', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-bench-press'
  },
  { 
    id: 2, 
    name: 'Supino Inclinado', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-bench-press'
  },
  { 
    id: 3, 
    name: 'Flexão de Braço', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/push-ups'
  },
  { 
    id: 4, 
    name: 'Supino Declinado', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/decline-barbell-bench-press'
  },
  { 
    id: 5, 
    name: 'Crucifixo', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-flyes'
  },
  { 
    id: 6, 
    name: 'Pec Deck', 
    category: 'peito', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pec-deck'
  },
  { 
    id: 7, 
    name: 'Cross Over', 
    category: 'peito', 
    equipment: 'Cabo', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-cable-chest-fly'
  },
  { 
    id: 8, 
    name: 'Flexão Diamante', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/diamond-push-ups'
  },
  { 
    id: 9, 
    name: 'Pullover', 
    category: 'peito', 
    equipment: 'Halter', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-pullover'
  },
  { 
    id: 10, 
    name: 'Supino com Halteres', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-bench-press'
  },
  { 
    id: 11, 
    name: 'Chest Press Máquina', 
    category: 'peito', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-chest-press'
  },
  { 
    id: 12, 
    name: 'Dips', 
    category: 'peito', 
    equipment: 'Paralelas', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dips'
  },
  { 
    id: 13, 
    name: 'Flexão Inclinada', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-push-ups'
  },
  { 
    id: 14, 
    name: 'Flexão Declinada', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/decline-push-ups'
  },
  { 
    id: 15, 
    name: 'Landmine Press', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/landmine-press'
  },

  // COSTAS (15 exercícios)
  { 
    id: 16, 
    name: 'Puxada Frontal', 
    category: 'costas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lat-pull-down'
  },
  { 
    id: 17, 
    name: 'Remada Curvada', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bent-over-barbell-row'
  },
  { 
    id: 18, 
    name: 'Pull-ups', 
    category: 'costas', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pull-ups'
  },
  { 
    id: 19, 
    name: 'Deadlift', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/deadlifts'
  },
  { 
    id: 20, 
    name: 'Remada Unilateral', 
    category: 'costas', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row'
  },
  { 
    id: 21, 
    name: 'Chin-ups', 
    category: 'costas', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/chin-ups'
  },
  { 
    id: 22, 
    name: 'Puxada Triangular', 
    category: 'costas', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/close-grip-lat-pull-down'
  },
  { 
    id: 23, 
    name: 'Remada Sentado', 
    category: 'costas', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-cable-row'
  },
  { 
    id: 24, 
    name: 'T-Bar Row', 
    category: 'costas', 
    equipment: 'T-Bar', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/t-bar-row'
  },
  { 
    id: 25, 
    name: 'Shrugs', 
    category: 'costas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-shrugs'
  },
  { 
    id: 26, 
    name: 'Face Pull', 
    category: 'costas', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/face-pull'
  },
  { 
    id: 27, 
    name: 'Remada Invertida', 
    category: 'costas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/inverted-row'
  },
  { 
    id: 28, 
    name: 'Good Morning', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/good-morning'
  },
  { 
    id: 29, 
    name: 'Hyperextensão', 
    category: 'costas', 
    equipment: 'Banco', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hyperextensions'
  },
  { 
    id: 30, 
    name: 'Remada com Halteres', 
    category: 'costas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-row'
  },

  // OMBROS (12 exercícios)
  { 
    id: 31, 
    name: 'Desenvolvimento Militar', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-dumbbell-press'
  },
  { 
    id: 32, 
    name: 'Elevação Lateral', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise'
  },
  { 
    id: 33, 
    name: 'Elevação Frontal', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-front-raise'
  },
  { 
    id: 34, 
    name: 'Desenvolvimento com Barra', 
    category: 'ombros', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-barbell-press'
  },
  { 
    id: 35, 
    name: 'Crucifixo Invertido', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-reverse-fly'
  },
  { 
    id: 36, 
    name: 'Arnold Press', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/arnold-dumbbell-press'
  },
  { 
    id: 37, 
    name: 'Upright Row', 
    category: 'ombros', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/upright-row'
  },
  { 
    id: 38, 
    name: 'Elevação Lateral no Cabo', 
    category: 'ombros', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-lateral-raise'
  },
  { 
    id: 39, 
    name: 'Desenvolvimento Sentado', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-press'
  },
  { 
    id: 40, 
    name: 'Pike Push-up', 
    category: 'ombros', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pike-push-up'
  },
  { 
    id: 41, 
    name: 'Handstand Push-up', 
    category: 'ombros', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/handstand-push-up'
  },
  { 
    id: 42, 
    name: 'Shoulder Press Máquina', 
    category: 'ombros', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-shoulder-press'
  },

  // BRAÇOS (18 exercícios)
  { 
    id: 43, 
    name: 'Rosca Direta', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-curl'
  },
  { 
    id: 44, 
    name: 'Tríceps Testa', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-dumbbell-tricep-extension'
  },
  { 
    id: 45, 
    name: 'Rosca Martelo', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-hammer-curl'
  },
  { 
    id: 46, 
    name: 'Tríceps Pulley', 
    category: 'bracos', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/tricep-rope-push-down'
  },
  { 
    id: 47, 
    name: 'Rosca Concentrada', 
    category: 'bracos', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/concentration-curl'
  },
  { 
    id: 48, 
    name: 'Tríceps Francês', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-barbell-tricep-extension'
  },
  { 
    id: 49, 
    name: 'Rosca 21', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-21s'
  },
  { 
    id: 50, 
    name: 'Close Grip Bench Press', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/close-grip-bench-press'
  },
  { 
    id: 51, 
    name: 'Rosca Inversa', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/reverse-barbell-curl'
  },
  { 
    id: 52, 
    name: 'Tríceps Mergulho', 
    category: 'bracos', 
    equipment: 'Banco', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bench-dips'
  },
  { 
    id: 53, 
    name: 'Rosca Alternada', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/alternating-dumbbell-curl'
  },
  { 
    id: 54, 
    name: 'Tríceps Coice', 
    category: 'bracos', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-kickback'
  },
  { 
    id: 55, 
    name: 'Rosca no Cabo', 
    category: 'bracos', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-curl'
  },
  { 
    id: 56, 
    name: 'Diamond Push-up', 
    category: 'bracos', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/diamond-push-up'
  },
  { 
    id: 57, 
    name: 'Rosca Scott', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/preacher-curl'
  },
  { 
    id: 58, 
    name: 'Overhead Tricep Extension', 
    category: 'bracos', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-tricep-extension'
  },
  { 
    id: 59, 
    name: 'Zottman Curl', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/zottman-curl'
  },
  { 
    id: 60, 
    name: 'JM Press', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/jm-press'
  },

  // PERNAS (20 exercícios)
  { 
    id: 61, 
    name: 'Agachamento', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/squat'
  },
  { 
    id: 62, 
    name: 'Leg Press', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/leg-press'
  },
  { 
    id: 63, 
    name: 'Afundo', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-lunges'
  },
  { 
    id: 64, 
    name: 'Cadeira Extensora', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/leg-extension'
  },
  { 
    id: 65, 
    name: 'Stiff', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/romanian-deadlift'
  },
  { 
    id: 66, 
    name: 'Mesa Flexora', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-leg-curl'
  },
  { 
    id: 67, 
    name: 'Agachamento Búlgaro', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bulgarian-split-squat'
  },
  { 
    id: 68, 
    name: 'Panturrilha em Pé', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-calf-raise'
  },
  { 
    id: 69, 
    name: 'Agachamento Hack', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hack-squat'
  },
  { 
    id: 70, 
    name: 'Panturrilha Sentado', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-calf-raise'
  },
  { 
    id: 71, 
    name: 'Front Squat', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/front-squat'
  },
  { 
    id: 72, 
    name: 'Walking Lunges', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/walking-dumbbell-lunges'
  },
  { 
    id: 73, 
    name: 'Sumo Deadlift', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/sumo-deadlift'
  },
  { 
    id: 74, 
    name: 'Wall Sit', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/wall-sit'
  },
  { 
    id: 75, 
    name: 'Goblet Squat', 
    category: 'pernas', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/goblet-squat'
  },
  { 
    id: 76, 
    name: 'Single Leg Deadlift', 
    category: 'pernas', 
    equipment: 'Halter', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/single-leg-deadlift'
  },
  { 
    id: 77, 
    name: 'Step Up', 
    category: 'pernas', 
    equipment: 'Banco', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-step-ups'
  },
  { 
    id: 78, 
    name: 'Pistol Squat', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pistol-squat'
  },
  { 
    id: 79, 
    name: 'Adução de Pernas', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hip-adduction'
  },
  { 
    id: 80, 
    name: 'Abdução de Pernas', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hip-abduction'
  },

  // CORE/ABS (10 exercícios)
  { 
    id: 81, 
    name: 'Prancha', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/plank'
  },
  { 
    id: 82, 
    name: 'Abdominal', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/sit-up'
  },
  { 
    id: 83, 
    name: 'Russian Twist', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/russian-twist'
  },
  { 
    id: 84, 
    name: 'Mountain Climbers', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/mountain-climber'
  },
  { 
    id: 85, 
    name: 'Dead Bug', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dead-bug'
  },
  { 
    id: 86, 
    name: 'Bicycle Crunch', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bicycle-crunch'
  },
  { 
    id: 87, 
    name: 'Leg Raises', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-leg-raise'
  },
  { 
    id: 88, 
    name: 'Hollow Body Hold', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hollow-body-hold'
  },
  { 
    id: 89, 
    name: 'Ab Wheel', 
    category: 'core', 
    equipment: 'Roda Abdominal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/ab-wheel-rollout'
  },
  { 
    id: 90, 
    name: 'Hanging Knee Raises', 
    category: 'core', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hanging-knee-raise'
  },

  // CARDIO (10 exercícios)
  { 
    id: 91, 
    name: 'Burpee', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/burpee'
  },
  { 
    id: 92, 
    name: 'Jumping Jacks', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/jumping-jacks'
  },
  { 
    id: 93, 
    name: 'High Knees', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/high-knees'
  },
  { 
    id: 94, 
    name: 'Butt Kickers', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/butt-kickers'
  },
  { 
    id: 95, 
    name: 'Box Jumps', 
    category: 'cardio', 
    equipment: 'Caixa', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/box-jump'
  },
  { 
    id: 96, 
    name: 'Battle Ropes', 
    category: 'cardio', 
    equipment: 'Cordas', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/battle-ropes'
  },
  { 
    id: 97, 
    name: 'Sprint Intervals', 
    category: 'cardio', 
    equipment: 'Esteira', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/treadmill-sprints'
  },
  { 
    id: 98, 
    name: 'Kettlebell Swings', 
    category: 'cardio', 
    equipment: 'Kettlebell', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/kettlebell-swing'
  },
  { 
    id: 99, 
    name: 'Rowing Machine', 
    category: 'cardio', 
    equipment: 'Remador', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/rowing-machine'
  },
  { 
    id: 100, 
    name: 'Bike Intervals', 
    category: 'cardio', 
    equipment: 'Bike', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/stationary-bike'
  }
];
