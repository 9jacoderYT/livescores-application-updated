import React, { useEffect, useState } from "react";
import { fetchStandings, fetchTeam } from "../../../lib/fetch-data";
import { useParams } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

export default function Team() {
  const [team, setTeam] = useState([]);

  const params = useParams();
  const teamID = params.teamID;
  const leagueID = params.leagueID;

  const fetchInfo = async () => {
    const data = await fetchStandings(leagueID);

    const searchquery = data.response[0].league.standings[0];

    const france = searchquery.filter((match) => {
      return match.team.id == teamID;
    });

    setTeam(france[0]);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (team.length === 0)
    return (
      <div className="h-screen m-auto pt-10" align="center">
        <CircularProgress />
      </div>
    );

  console.log(team.team.logo);

  return (
    <div className="bg-white">
      <p>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>P</th>
              <th> W </th>
              <th>D</th>
              <th>L</th>
              <th>F/A</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="flex truncate hover:underline hover:cursor-pointer">
                <img src={team.team.logo} width={25} alt="logo" />{" "}
                {team.team.name}
              </th>
              <td>{team.all.played}</td>
              <td>{team.all.win}</td>
              <td>{team.all.draw}</td>
              <td>{team.all.lose}</td>
              <td>
                {team.all.goals.for}/{team.all.goals.against}
              </td>
              <td>{team.points}</td>
            </tr>
          </tbody>
        </table>
      </p>

      <div className="p-3 bold text-center">Form : {team.form}</div>

      <p className="text-center">
        HOME : P{team.home.played} - W{team.home.win} - D{team.home.draw} - L
        {team.home.lose} - GF{team.home.goals.for} - GA{team.home.goals.against}
      </p>
      <p className="text-center">
        AWAY : P{team.away.played} - W{team.away.win} - D{team.away.draw} - L
        {team.away.lose} - GF{team.away.goals.for} - GA{team.away.goals.against}
      </p>
    </div>
  );
}
