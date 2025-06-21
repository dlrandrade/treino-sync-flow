
// Base de dados expandida de exercícios com múltiplas variações
export const exercisesDatabase = [
  // PEITO (25 exercícios - múltiplas variações)
  // Supino - 5 variações
  { 
    id: 1, 
    name: 'Supino Reto com Barra', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-bench-press'
  },
  { 
    id: 2, 
    name: 'Supino Reto com Halteres', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-bench-press'
  },
  { 
    id: 3, 
    name: 'Supino Inclinado com Barra', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-barbell-bench-press'
  },
  { 
    id: 4, 
    name: 'Supino Inclinado com Halteres', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-bench-press'
  },
  { 
    id: 5, 
    name: 'Supino Declinado com Barra', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/decline-barbell-bench-press'
  },

  // Flexões - 4 variações
  { 
    id: 6, 
    name: 'Flexão de Braço Tradicional', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/push-ups'
  },
  { 
    id: 7, 
    name: 'Flexão Inclinada', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-push-ups'
  },
  { 
    id: 8, 
    name: 'Flexão Declinada', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/decline-push-ups'
  },
  { 
    id: 9, 
    name: 'Flexão Diamante', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/diamond-push-ups'
  },

  // Crucifixo - 4 variações
  { 
    id: 10, 
    name: 'Crucifixo Reto com Halteres', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-flyes'
  },
  { 
    id: 11, 
    name: 'Crucifixo Inclinado com Halteres', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-flyes'
  },
  { 
    id: 12, 
    name: 'Crucifixo no Cabo (Cross Over)', 
    category: 'peito', 
    equipment: 'Cabo', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-cable-chest-fly'
  },
  { 
    id: 13, 
    name: 'Crucifixo Cross Over Alto', 
    category: 'peito', 
    equipment: 'Cabo', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/high-cable-crossover'
  },

  // Máquinas e outros - 8 variações
  { 
    id: 14, 
    name: 'Pec Deck', 
    category: 'peito', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pec-deck'
  },
  { 
    id: 15, 
    name: 'Chest Press Máquina', 
    category: 'peito', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-chest-press'
  },
  { 
    id: 16, 
    name: 'Dips (Paralelas)', 
    category: 'peito', 
    equipment: 'Paralelas', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dips'
  },
  { 
    id: 17, 
    name: 'Pullover com Halter', 
    category: 'peito', 
    equipment: 'Halter', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-pullover'
  },
  { 
    id: 18, 
    name: 'Landmine Press', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/landmine-press'
  },
  { 
    id: 19, 
    name: 'Supino Smith Machine', 
    category: 'peito', 
    equipment: 'Smith Machine', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/smith-machine-bench-press'
  },
  { 
    id: 20, 
    name: 'Squeeze Press', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/squeeze-press'
  },
  { 
    id: 21, 
    name: 'Flexão Hindu', 
    category: 'peito', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hindu-push-up'
  },
  { 
    id: 22, 
    name: 'Floor Press', 
    category: 'peito', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/floor-press'
  },
  { 
    id: 23, 
    name: 'Cable Fly Baixo', 
    category: 'peito', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/low-cable-crossover'
  },
  { 
    id: 24, 
    name: 'Supino Guilhotina', 
    category: 'peito', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/guillotine-press'
  },
  { 
    id: 25, 
    name: 'Chest Fly Máquina', 
    category: 'peito', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-fly'
  },

  // COSTAS (25 exercícios - múltiplas variações)
  // Puxadas - 5 variações
  { 
    id: 26, 
    name: 'Puxada Frontal Pegada Aberta', 
    category: 'costas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lat-pull-down'
  },
  { 
    id: 27, 
    name: 'Puxada Frontal Pegada Fechada', 
    category: 'costas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/close-grip-lat-pull-down'
  },
  { 
    id: 28, 
    name: 'Puxada Atrás da Nuca', 
    category: 'costas', 
    equipment: 'Máquina', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/behind-neck-lat-pulldown'
  },
  { 
    id: 29, 
    name: 'Puxada Triangular', 
    category: 'costas', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/v-bar-lat-pulldown'
  },
  { 
    id: 30, 
    name: 'Puxada Unilateral', 
    category: 'costas', 
    equipment: 'Cabo', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/one-arm-lat-pulldown'
  },

  // Pull-ups/Chin-ups - 4 variações
  { 
    id: 31, 
    name: 'Pull-ups Pegada Pronada', 
    category: 'costas', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pull-ups'
  },
  { 
    id: 32, 
    name: 'Chin-ups Pegada Supinada', 
    category: 'costas', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/chin-ups'
  },
  { 
    id: 33, 
    name: 'Pull-ups Neutro', 
    category: 'costas', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/neutral-grip-pull-ups'
  },
  { 
    id: 34, 
    name: 'Pull-ups Assistido', 
    category: 'costas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/assisted-pull-ups'
  },

  // Remadas - 8 variações
  { 
    id: 35, 
    name: 'Remada Curvada com Barra', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bent-over-barbell-row'
  },
  { 
    id: 36, 
    name: 'Remada Unilateral com Halter', 
    category: 'costas', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row'
  },
  { 
    id: 37, 
    name: 'Remada Sentado na Máquina', 
    category: 'costas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-cable-row'
  },
  { 
    id: 38, 
    name: 'T-Bar Row', 
    category: 'costas', 
    equipment: 'T-Bar', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/t-bar-row'
  },
  { 
    id: 39, 
    name: 'Remada com Halteres', 
    category: 'costas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-row'
  },
  { 
    id: 40, 
    name: 'Remada Invertida', 
    category: 'costas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/inverted-row'
  },
  { 
    id: 41, 
    name: 'Remada Landmine', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/landmine-row'
  },
  { 
    id: 42, 
    name: 'Remada Meadows', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/meadows-row'
  },

  // Deadlifts - 4 variações
  { 
    id: 43, 
    name: 'Deadlift Convencional', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/deadlifts'
  },
  { 
    id: 44, 
    name: 'Romanian Deadlift', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/romanian-deadlift'
  },
  { 
    id: 45, 
    name: 'Sumo Deadlift', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/sumo-deadlift'
  },
  { 
    id: 46, 
    name: 'Deficit Deadlift', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/deficit-deadlift'
  },

  // Outros exercícios de costas - 4 variações
  { 
    id: 47, 
    name: 'Shrugs com Halteres', 
    category: 'costas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-shrugs'
  },
  { 
    id: 48, 
    name: 'Face Pull', 
    category: 'costas', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/face-pull'
  },
  { 
    id: 49, 
    name: 'Good Morning', 
    category: 'costas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/good-morning'
  },
  { 
    id: 50, 
    name: 'Hyperextensão', 
    category: 'costas', 
    equipment: 'Banco', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hyperextensions'
  },

  // OMBROS (20 exercícios - múltiplas variações)
  // Desenvolvimento - 5 variações
  { 
    id: 51, 
    name: 'Desenvolvimento Militar em Pé', 
    category: 'ombros', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-barbell-press'
  },
  { 
    id: 52, 
    name: 'Desenvolvimento com Halteres Sentado', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-press'
  },
  { 
    id: 53, 
    name: 'Desenvolvimento com Halteres em Pé', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-dumbbell-press'
  },
  { 
    id: 54, 
    name: 'Arnold Press', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/arnold-dumbbell-press'
  },
  { 
    id: 55, 
    name: 'Shoulder Press Máquina', 
    category: 'ombros', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-shoulder-press'
  },

  // Elevações Laterais - 4 variações
  { 
    id: 56, 
    name: 'Elevação Lateral com Halteres', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise'
  },
  { 
    id: 57, 
    name: 'Elevação Lateral no Cabo', 
    category: 'ombros', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-lateral-raise'
  },
  { 
    id: 58, 
    name: 'Elevação Lateral Inclinado', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lean-away-lateral-raise'
  },
  { 
    id: 59, 
    name: 'Elevação Lateral Máquina', 
    category: 'ombros', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-lateral-raise'
  },

  // Elevações Frontais - 3 variações
  { 
    id: 60, 
    name: 'Elevação Frontal com Halteres', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-front-raise'
  },
  { 
    id: 61, 
    name: 'Elevação Frontal com Barra', 
    category: 'ombros', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-front-raise'
  },
  { 
    id: 62, 
    name: 'Elevação Frontal no Cabo', 
    category: 'ombros', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-front-raise'
  },

  // Deltoide Posterior - 4 variações
  { 
    id: 63, 
    name: 'Crucifixo Invertido com Halteres', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bent-over-dumbbell-reverse-fly'
  },
  { 
    id: 64, 
    name: 'Reverse Fly Máquina', 
    category: 'ombros', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/reverse-fly-machine'
  },
  { 
    id: 65, 
    name: 'Reverse Fly no Cabo', 
    category: 'ombros', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-reverse-fly'
  },
  { 
    id: 66, 
    name: 'Face Pull High', 
    category: 'ombros', 
    equipment: 'Cabo', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/high-face-pull'
  },

  // Outros ombros - 4 variações
  { 
    id: 67, 
    name: 'Upright Row com Barra', 
    category: 'ombros', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/upright-row'
  },
  { 
    id: 68, 
    name: 'Pike Push-up', 
    category: 'ombros', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pike-push-up'
  },
  { 
    id: 69, 
    name: 'Handstand Push-up', 
    category: 'ombros', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/handstand-push-up'
  },
  { 
    id: 70, 
    name: 'Clean and Press', 
    category: 'ombros', 
    equipment: 'Halteres', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/clean-and-press'
  },

  // BRAÇOS (30 exercícios - múltiplas variações)
  // Bíceps - Roscas Diretas - 5 variações
  { 
    id: 71, 
    name: 'Rosca Direta com Barra', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-curl'
  },
  { 
    id: 72, 
    name: 'Rosca Direta com Barra W', 
    category: 'bracos', 
    equipment: 'Barra W', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/ez-bar-curl'
  },
  { 
    id: 73, 
    name: 'Rosca Direta no Cabo', 
    category: 'bracos', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-curl'
  },
  { 
    id: 74, 
    name: 'Rosca Direta Máquina', 
    category: 'bracos', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/machine-curl'
  },
  { 
    id: 75, 
    name: 'Rosca 21', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-21s'
  },

  // Bíceps - Roscas com Halteres - 5 variações
  { 
    id: 76, 
    name: 'Rosca Alternada com Halteres', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/alternating-dumbbell-curl'
  },
  { 
    id: 77, 
    name: 'Rosca Martelo', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-hammer-curl'
  },
  { 
    id: 78, 
    name: 'Rosca Concentrada', 
    category: 'bracos', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/concentration-curl'
  },
  { 
    id: 79, 
    name: 'Rosca Scott', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/preacher-curl'
  },
  { 
    id: 80, 
    name: 'Zottman Curl', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/zottman-curl'
  },

  // Bíceps - Outros - 5 variações
  { 
    id: 81, 
    name: 'Rosca Inversa', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/reverse-barbell-curl'
  },
  { 
    id: 82, 
    name: 'Drag Curl', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/drag-curl'
  },
  { 
    id: 83, 
    name: 'Spider Curl', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/spider-curl'
  },
  { 
    id: 84, 
    name: 'Cable Hammer Curl', 
    category: 'bracos', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/cable-hammer-curl'
  },
  { 
    id: 85, 
    name: 'Incline Dumbbell Curl', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/incline-dumbbell-curl'
  },

  // Tríceps - Extensões - 5 variações
  { 
    id: 86, 
    name: 'Tríceps Testa com Halteres', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-dumbbell-tricep-extension'
  },
  { 
    id: 87, 
    name: 'Tríceps Francês com Barra', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-barbell-tricep-extension'
  },
  { 
    id: 88, 
    name: 'Overhead Tricep Extension', 
    category: 'bracos', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-dumbbell-tricep-extension'
  },
  { 
    id: 89, 
    name: 'Tríceps Pulley Barra', 
    category: 'bracos', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/tricep-push-down'
  },
  { 
    id: 90, 
    name: 'Tríceps Pulley Corda', 
    category: 'bracos', 
    equipment: 'Cabo', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/tricep-rope-push-down'
  },

  // Tríceps - Outros - 5 variações
  { 
    id: 91, 
    name: 'Close Grip Bench Press', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/close-grip-bench-press'
  },
  { 
    id: 92, 
    name: 'Tríceps Mergulho no Banco', 
    category: 'bracos', 
    equipment: 'Banco', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bench-dips'
  },
  { 
    id: 93, 
    name: 'Tríceps Coice', 
    category: 'bracos', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-kickback'
  },
  { 
    id: 94, 
    name: 'Diamond Push-up', 
    category: 'bracos', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/diamond-push-up'
  },
  { 
    id: 95, 
    name: 'JM Press', 
    category: 'bracos', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/jm-press'
  },

  // Antebraços - 5 variações
  { 
    id: 96, 
    name: 'Rosca Punho', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/wrist-curl'
  },
  { 
    id: 97, 
    name: 'Rosca Punho Inversa', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/reverse-wrist-curl'
  },
  { 
    id: 98, 
    name: 'Farmer Walk', 
    category: 'bracos', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/farmers-walk'
  },
  { 
    id: 99, 
    name: 'Plate Pinch', 
    category: 'bracos', 
    equipment: 'Anilhas', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/plate-pinch'
  },
  { 
    id: 100, 
    name: 'Grip Crush', 
    category: 'bracos', 
    equipment: 'Hand Grip', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hand-gripper'
  },

  // PERNAS (35 exercícios - múltiplas variações)
  // Agachamentos - 8 variações
  { 
    id: 101, 
    name: 'Agachamento Livre com Barra', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/squat'
  },
  { 
    id: 102, 
    name: 'Front Squat', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/front-squat'
  },
  { 
    id: 103, 
    name: 'Goblet Squat', 
    category: 'pernas', 
    equipment: 'Halter', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/goblet-squat'
  },
  { 
    id: 104, 
    name: 'Agachamento Hack', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hack-squat'
  },
  { 
    id: 105, 
    name: 'Agachamento Smith Machine', 
    category: 'pernas', 
    equipment: 'Smith Machine', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/smith-machine-squat'
  },
  { 
    id: 106, 
    name: 'Agachamento Búlgaro', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bulgarian-split-squat'
  },
  { 
    id: 107, 
    name: 'Pistol Squat', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/pistol-squat'
  },
  { 
    id: 108, 
    name: 'Jump Squat', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/jump-squat'
  },

  // Leg Press - 3 variações
  { 
    id: 109, 
    name: 'Leg Press 45°', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/leg-press'
  },
  { 
    id: 110, 
    name: 'Leg Press Horizontal', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/horizontal-leg-press'
  },
  { 
    id: 111, 
    name: 'Single Leg Press', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/single-leg-press'
  },

  // Afundos - 5 variações
  { 
    id: 112, 
    name: 'Afundo Estático', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-lunges'
  },
  { 
    id: 113, 
    name: 'Walking Lunges', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/walking-dumbbell-lunges'
  },
  { 
    id: 114, 
    name: 'Reverse Lunge', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/reverse-lunge'
  },
  { 
    id: 115, 
    name: 'Lateral Lunge', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lateral-lunge'
  },
  { 
    id: 116, 
    name: 'Jump Lunge', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/jump-lunge'
  },

  // Extensão e Flexão - 6 variações
  { 
    id: 117, 
    name: 'Cadeira Extensora', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/leg-extension'
  },
  { 
    id: 118, 
    name: 'Extensora Unilateral', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/single-leg-extension'
  },
  { 
    id: 119, 
    name: 'Mesa Flexora Deitado', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-leg-curl'
  },
  { 
    id: 120, 
    name: 'Mesa Flexora Sentado', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-leg-curl'
  },
  { 
    id: 121, 
    name: 'Mesa Flexora em Pé', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-leg-curl'
  },
  { 
    id: 122, 
    name: 'Nordic Curl', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/nordic-curl'
  },

  // Stiff/RDL - 4 variações
  { 
    id: 123, 
    name: 'Stiff com Barra', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/romanian-deadlift'
  },
  { 
    id: 124, 
    name: 'Stiff com Halteres', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-romanian-deadlift'
  },
  { 
    id: 125, 
    name: 'Single Leg Deadlift', 
    category: 'pernas', 
    equipment: 'Halter', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/single-leg-deadlift'
  },
  { 
    id: 126, 
    name: 'Stiff Sumo', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/sumo-romanian-deadlift'
  },

  // Panturrilha - 4 variações
  { 
    id: 127, 
    name: 'Panturrilha em Pé', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/standing-calf-raise'
  },
  { 
    id: 128, 
    name: 'Panturrilha Sentado', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/seated-calf-raise'
  },
  { 
    id: 129, 
    name: 'Panturrilha no Leg Press', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/leg-press-calf-raise'
  },
  { 
    id: 130, 
    name: 'Panturrilha com Halteres', 
    category: 'pernas', 
    equipment: 'Halteres', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-calf-raise'
  },

  // Glúteos e Outros - 5 variações
  { 
    id: 131, 
    name: 'Hip Thrust', 
    category: 'pernas', 
    equipment: 'Barra', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/barbell-hip-thrust'
  },
  { 
    id: 132, 
    name: 'Step Up', 
    category: 'pernas', 
    equipment: 'Banco', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dumbbell-step-ups'
  },
  { 
    id: 133, 
    name: 'Wall Sit', 
    category: 'pernas', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/wall-sit'
  },
  { 
    id: 134, 
    name: 'Adução de Pernas', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hip-adduction'
  },
  { 
    id: 135, 
    name: 'Abdução de Pernas', 
    category: 'pernas', 
    equipment: 'Máquina', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hip-abduction'
  },

  // CORE/ABS (15 exercícios)
  // Pranchas - 5 variações
  { 
    id: 136, 
    name: 'Prancha Tradicional', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/plank'
  },
  { 
    id: 137, 
    name: 'Prancha Lateral', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/side-plank'
  },
  { 
    id: 138, 
    name: 'Prancha com Elevação de Perna', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/plank-leg-raises'
  },
  { 
    id: 139, 
    name: 'Prancha Instável', 
    category: 'core', 
    equipment: 'Bola', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/stability-ball-plank'
  },
  { 
    id: 140, 
    name: 'Prancha Up-Down', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/plank-up-down'
  },

  // Abdominais - 5 variações
  { 
    id: 141, 
    name: 'Abdominal Tradicional', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/sit-up'
  },
  { 
    id: 142, 
    name: 'Crunch', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/crunch'
  },
  { 
    id: 143, 
    name: 'Bicycle Crunch', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/bicycle-crunch'
  },
  { 
    id: 144, 
    name: 'Reverse Crunch', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/reverse-crunch'
  },
  { 
    id: 145, 
    name: 'V-Ups', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/v-ups'
  },

  // Outros Core - 5 variações
  { 
    id: 146, 
    name: 'Russian Twist', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/russian-twist'
  },
  { 
    id: 147, 
    name: 'Mountain Climbers', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/mountain-climber'
  },
  { 
    id: 148, 
    name: 'Dead Bug', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/dead-bug'
  },
  { 
    id: 149, 
    name: 'Leg Raises', 
    category: 'core', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/lying-leg-raise'
  },
  { 
    id: 150, 
    name: 'Hanging Knee Raises', 
    category: 'core', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/hanging-knee-raise'
  },

  // CARDIO (15 exercícios)
  // HIIT - 5 variações
  { 
    id: 151, 
    name: 'Burpee', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/burpee'
  },
  { 
    id: 152, 
    name: 'Burpee com Pull-up', 
    category: 'cardio', 
    equipment: 'Barra Fixa', 
    difficulty: 'Avançado',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/burpee-pull-up'
  },
  { 
    id: 153, 
    name: 'Tabata Squats', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/tabata-squats'
  },
  { 
    id: 154, 
    name: 'Sprint Intervals', 
    category: 'cardio', 
    equipment: 'Esteira', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/treadmill-sprints'
  },
  { 
    id: 155, 
    name: 'Bike Intervals', 
    category: 'cardio', 
    equipment: 'Bike', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/stationary-bike'
  },

  // Movimentos Básicos - 5 variações
  { 
    id: 156, 
    name: 'Jumping Jacks', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/jumping-jacks'
  },
  { 
    id: 157, 
    name: 'High Knees', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/high-knees'
  },
  { 
    id: 158, 
    name: 'Butt Kickers', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/butt-kickers'
  },
  { 
    id: 159, 
    name: 'Star Jumps', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/star-jumps'
  },
  { 
    id: 160, 
    name: 'Skaters', 
    category: 'cardio', 
    equipment: 'Peso Corporal', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/skaters'
  },

  // Equipamentos - 5 variações
  { 
    id: 161, 
    name: 'Box Jumps', 
    category: 'cardio', 
    equipment: 'Caixa', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/box-jump'
  },
  { 
    id: 162, 
    name: 'Battle Ropes', 
    category: 'cardio', 
    equipment: 'Cordas', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/battle-ropes'
  },
  { 
    id: 163, 
    name: 'Kettlebell Swings', 
    category: 'cardio', 
    equipment: 'Kettlebell', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/kettlebell-swing'
  },
  { 
    id: 164, 
    name: 'Rowing Machine', 
    category: 'cardio', 
    equipment: 'Remador', 
    difficulty: 'Básico',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/rowing-machine'
  },
  { 
    id: 165, 
    name: 'Assault Bike', 
    category: 'cardio', 
    equipment: 'Air Bike', 
    difficulty: 'Intermediário',
    mediaType: 'video' as const,
    mediaUrl: 'https://www.muscleandstrength.com/exercises/assault-bike'
  }
];
