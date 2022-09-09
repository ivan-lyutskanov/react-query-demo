import { createContext, useState, useCallback } from 'react';

export const LoadingContext = createContext();

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const showSpinner = useCallback(() => setIsLoading(true), []);
  const hideSpinner = useCallback(() => setIsLoading(false), []);

  return <LoadingContext.Provider value={{ isLoading, showSpinner, hideSpinner }}>{children}</LoadingContext.Provider>;
}
