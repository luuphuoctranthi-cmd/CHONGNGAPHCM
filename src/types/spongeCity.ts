export interface UrbanZone {
  id: string;
  name: string;
  category: 'education' | 'community' | 'park';
  role: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface HydrologyState {
  rainIntensity: number; // mm/h (0 to 150)
  tideLevel: number; // meters (+0.5m to +2.0m)
  groundLevel: number; // baseline +1.4m
  isAutoMode: boolean;
  manualValveOpen: boolean;
  manualPumpActive: boolean;
  simulationRunning: boolean;
}

export interface EcoCellSpec {
  material: string;
  recycledPlasticRatio: number; // 100%
  loadCapacityTons: number; // 38 tons/m2
  voidRatio: number; // 92%
  dimensions: string; // 500 x 500 x 300 mm
  waterInfiltrationRate: number; // 1500 mm/h
  lifespanYears: string; // 5 - 7 years
  recyclability: string; // 100% closed loop
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
