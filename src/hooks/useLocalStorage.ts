import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: any, timeout = 1) {
  const keyRef = JSON.stringify(key);
  const item = JSON.parse(localStorage.getItem(keyRef) as string);
  const [localData, updateLocalData] = useState(item && item.timeout >= Date.now() ? item : { ...item, data: null });

  const updateData = useCallback(
    (data: T) => {
      const date = new Date();
      const state = { data, timeout: date.setHours(date.getHours() + timeout) };
      localStorage.setItem(keyRef, JSON.stringify(state));
      updateLocalData(state);
    },
    [keyRef, timeout],
  );

  // update expiration date without re-render components
  const updateTimeout = useCallback(() => {
    const date = new Date();
    const state = { ...localData, timeout: date.setHours(date.getHours() + timeout) };
    localStorage.setItem(keyRef, JSON.stringify(state));
  }, [keyRef, localData, timeout]);

  useEffect(() => {
    console.log("useLocalStorage", localData);
  }, [localData]);

  return [localData, updateData, updateTimeout];
}
