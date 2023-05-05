import React from "react";
import TableTr from "./tableTr";

export default function Table({ clubs, league, leagueID }) {
  return (
    <div className="overflow-x-auto p-2 z-0">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>{league}</th>
            <th>P</th>
            <th> W </th>
            <th>D</th>
            <th>L</th>
            <th>F/A</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club) => (
            <TableTr club={club} leagueID={leagueID} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
