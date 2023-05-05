import React from "react";

export default function TableTr({ club }) {
  console.log(club);
  return (
    <>
      <tr>
        <th className="flex truncate">
          {" "}
          <img src={club.team.logo} width={25} alt="logo" /> {club.team.name}
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
