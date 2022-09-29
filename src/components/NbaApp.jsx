import React, { useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { PlayerGrid } from "./PlayerGrid";

export const NbaApp = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const { playerData, isLoading } = useFetch(url);

  const onSubmit = (e) => {
    e.preventDefault();
    if (search != "")
      setUrl(`https://www.balldontlie.io/api/v1/players?search=${search}`);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="pl-56 pr-56 pt-10">
      <h1 className="font-bold text-2xl mb-10">Search for any NBA player</h1>
      <form onSubmit={onSubmit}>
        <input
          className="w-full h-10 border-2 rounded-lg p-10 text-lg"
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Ex: Luka Doncic"
        />
      </form>

      {isLoading && <Loading className="mt-2" />}

      {playerData && <PlayerGrid players={playerData} />}
    </main>
  );
};
