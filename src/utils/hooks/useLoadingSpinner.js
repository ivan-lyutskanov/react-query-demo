import { useContext, useEffect } from 'react';
import { LoadingContext } from '../loadingProvider';

export const useLoadingSpinner = (loading) => {
  const context = useContext(LoadingContext);

  useEffect(() => {
    if (loading !== undefined) loading ? context.showSpinner() : context.hideSpinner();
  }, [loading, context]);

  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider.');
  }

  return context;
};