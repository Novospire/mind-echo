import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  type: 'patient' | 'family';
  isAnonymous: boolean;
  createdAt: Date;
}

interface AppState {
  user: User | null;
  currentDate: Date;
  dailyMood: number | null;
  exerciseProgress: Record<string, any>;
  testScores: Record<string, any>;
  reminders: any[];
  settings: {
    notifications: boolean;
    fontSize: 'normal' | 'large' | 'xlarge';
    contrast: 'normal' | 'high';
    language: string;
  };
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_DAILY_MOOD'; payload: number }
  | { type: 'UPDATE_EXERCISE_PROGRESS'; payload: { exerciseId: string; score: any } }
  | { type: 'ADD_TEST_SCORE'; payload: { testId: string; score: any } }
  | { type: 'ADD_REMINDER'; payload: any }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<AppState['settings']> }
  | { type: 'LOGOUT' };

const initialState: AppState = {
  user: null,
  currentDate: new Date(),
  dailyMood: null,
  exerciseProgress: {},
  testScores: {},
  reminders: [],
  settings: {
    notifications: true,
    fontSize: 'normal',
    contrast: 'normal',
    language: 'tr',
  },
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_DAILY_MOOD':
      return { ...state, dailyMood: action.payload };
    case 'UPDATE_EXERCISE_PROGRESS':
      return {
        ...state,
        exerciseProgress: {
          ...state.exerciseProgress,
          [action.payload.exerciseId]: action.payload.score,
        },
      };
    case 'ADD_TEST_SCORE':
      return {
        ...state,
        testScores: {
          ...state.testScores,
          [action.payload.testId]: action.payload.score,
        },
      };
    case 'ADD_REMINDER':
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };
    case 'LOGOUT':
      return { ...initialState, currentDate: new Date() };
    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};