import React from "react";
import Tabletr from "../tabletr";

export default function League({ fixture }) {
  return (
    <div>
      <div className="p-2 text-white bg-gray-700">{fixture[0].league.name}</div>
      {fixture.map((fixture) => (
        <Tabletr fixture={fixture} />
      ))}
      <div className="border-solid border-2 border-black"></div>
    </div>
  );
}
