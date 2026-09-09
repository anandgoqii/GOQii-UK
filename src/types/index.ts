export interface CareProgramme {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  clinicalFocus: string[];
  coachingApproach: string;
  image: string;
  badgeColor?: string;
  stats?: {
    value: string;
    label: string;
  };
}

export interface MethodologyStep {
  stepNumber: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
  iconName: string;
}

export interface WellnessPillar {
  id: string;
  title: string;
  actionSubtitle: string;
  description: string;
  keyPractices: string[];
  image: string;
  stats: string;
}

export interface Principle {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface HealthOutcome {
  metric: string;
  label: string;
  baseline: string;
  duration: string;
  detail: string;
}

export interface PatientStory {
  id: string;
  name: string;
  location: string;
  programme: string;
  quote: string;
  story: string;
  outcomeMetric: string;
  outcomeLabel: string;
  avatarUrl: string;
}

export interface UkRegion {
  id: string;
  name: string;
  code: string;
  summary: string;
  hubsCount: number;
  practices: {
    name: string;
    location: string;
    networkType: string;
    services: string[];
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  badge: string;
  standard: string;
}
