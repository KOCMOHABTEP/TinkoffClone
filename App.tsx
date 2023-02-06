import React from 'react';
import { AuthProvider } from "./app/providers/AuthProvider";

export default function App() {
  return {
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  }
}

