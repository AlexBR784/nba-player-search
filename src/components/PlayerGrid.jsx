import React from "react";
import { Player } from "./Player";

export const PlayerGrid = ({ players }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap w-full mt-20">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </>
  );
};
