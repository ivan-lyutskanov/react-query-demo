import { useState, useEffect } from "react";

export const useAsync = (asyncFnAsProp) => {
  const [data, setData] = useState({
    data: null,
    error: null,
    loading: false,
  });

  const run = async (asyncFn) => {
    try {
      setData({ data: null, error: null, loading: true })
      const response = await asyncFn()
      const result = { data: response, error: null, loading: false }
      setData(result)
      return result
    } catch (error) {
      const result = { data: null, error: error.message, loading: false }
      setData(result)
      return result
    }
  };

  useEffect( () => {
    run(asyncFnAsProp)
  }, [asyncFnAsProp])

  return {
    ...data,
    refetch: () => run(asyncFnAsProp)
  };
};