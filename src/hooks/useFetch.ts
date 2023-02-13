import { useEffect, useState } from "react";

function useFetch<T = unknown>(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [isError, setIsError] = useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(true);
    fetch(BASE_URL + url, {
      headers: {
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res?.data);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return {
    isError,
    isLoading,
    data,
  };
}

export default useFetch;
