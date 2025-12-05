import React from 'react';

export interface TerminalLine {
  id: string;
  type: 'command' | 'info' | 'success' | 'warn' | 'error' | 'money';
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}