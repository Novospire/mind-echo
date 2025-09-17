import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ConsentState {
  gdprConsent: boolean;
  medicalDisclaimer: boolean;
  cookiesConsent: boolean;
  dataProcessingConsent: boolean;
  hasGivenInitialConsent: boolean;
}

interface ConsentContextType {
  consent: ConsentState;
  updateConsent: (type: keyof ConsentState, value: boolean) => void;
  resetConsent: () => void;
}

const defaultConsent: ConsentState = {
  gdprConsent: false,
  medicalDisclaimer: false,
  cookiesConsent: false,
  dataProcessingConsent: false,
  hasGivenInitialConsent: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const stored = localStorage.getItem('mindecho-consent');
    return stored ? JSON.parse(stored) : defaultConsent;
  });

  useEffect(() => {
    localStorage.setItem('mindecho-consent', JSON.stringify(consent));
  }, [consent]);

  const updateConsent = (type: keyof ConsentState, value: boolean) => {
    setConsent(prev => ({ ...prev, [type]: value }));
  };

  const resetConsent = () => {
    setConsent(defaultConsent);
    localStorage.removeItem('mindecho-consent');
  };

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, resetConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};