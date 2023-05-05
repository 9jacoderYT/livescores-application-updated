import React from "react";
import { Link } from "react-router-dom";

export default function TableTr({ club, leagueID }) {
  console.log(club);
  return (
    <>
      <tr>
        <th className="flex truncate hover:underline hover:cursor-pointer">
          <Link to={`/team/${club.team.id}/${leagueID}`}>
            {" "}
            <img src={club.team.logo} width={25} alt="logo" /> {club.team.name}
          </Link>
        </th>
        <td>{club.all.played}</td>
        <td>{club.all.win}</td>
        <td>{club.all.draw}</td>
        <td>{club.all.lose}</td>
        <td>
          {club.all.goals.for}/{club.all.goals.against}
        </td>
        <td>{club.points}</td>
      </tr>
    </>
  );
}
