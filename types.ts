
/* Fix: Import React to resolve 'Cannot find namespace React' error when using React.ReactNode */
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'Agency' | 'Training';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
}
