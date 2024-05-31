"use client"
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react';

interface AuthContextType {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const value = {
    currentStep,
    setCurrentStep,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

