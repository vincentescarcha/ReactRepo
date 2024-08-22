import { useCallback, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

export default function useGetRequest(url: string) {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  const get = useCallback(async () => {
    setLoadingState(loadingStatus.isLoading);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoadingState(loadingStatus.loaded);
      return result;
    }
    catch (error) {
      setLoadingState(loadingStatus.hasError);
    }
  }, [url]);

  return { get, loadingState };
}