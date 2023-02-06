import React from 'react';
import {AuthProvider} from './app/providers/AuthProvider';
import Navigation from './app/navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
