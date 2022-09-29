import React from "react";

export const Player = ({ player }) => {
  return (
    <div className="ml-4 mt-5 rounded border-2 border-gray-100 p-20 text-center">
      <p className="font-bold">
        {player.first_name} {player.last_name}
      </p>
      <p>
        {player.team.full_name} ({player.team.abbreviation})
      </p>
      <p>
        {(
          Number(player.height_feet) * 0.3048 +
          Number(player.height_inches) * 0.0254
        ).toFixed(2)}{" "}
        m.
      </p>
      <p>{player.position}</p>
    </div>
  );
};
