
import type React from 'react';

export interface PromptTip {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  prompt: string;
}
