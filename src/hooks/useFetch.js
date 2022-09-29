import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const fetchData = async () => {
    console.log(url);
    setIsLoading(true);
    const resp = await fetch(url);
    const { data } = await resp.json();
    setPlayerData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (url != "") fetchData();
  }, [url]);

  return {
    playerData,
    isLoading,
  };
};
