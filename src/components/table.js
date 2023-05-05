import React from "react";
import Tabletr from "./tabletr";
import League from "./leagues/league";

export default function Table({ data }) {
  const england = data.response.filter((match) => {
    return match.league.country === "England";
  });

  const spain = data.response.filter((match) => {
    return match.league.country === "Spain";
  });

  const france = data.response.filter((match) => {
    return match.league.country === "France";
  });

  const italy = data.response.filter((match) => {
    return match.league.country === "Italy";
  });

  const global = data.response.filter((match) => {
    return match.league.country !== "Spain";
  });

  return (
    <div className=" bg-gray-400 grid grid-cols-1 divide-y text-black">
      {/* Leagues */}
      {england.length === 0 ? null : <League fixture={england} />}
      {italy.length === 0 ? null : <League fixture={italy} />}
      {france.length === 0 ? null : <League fixture={france} />}
      {spain.length === 0 ? null : <League fixture={spain} />}

      {global.map((globe) => (
        <Tabletr fixture={globe} />
      ))}
    </div>
  );
}
