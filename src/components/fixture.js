import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchFixtures } from "../lib/fetch-data";
import FixtureItem from "./fixtureItem";

export default function Fixture() {
  const [match, setMatch] = useState([]);

  const params = useParams();
  const matchID = params.matchID;

  const fetchInfo = async () => {
    const data = await fetchFixtures();

    const france = data.response.filter((match) => {
      return match.fixture.id == matchID;
    });

    console.log(france);

    setMatch(france);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (match.length === 0)
    return (
      <div className=" m-auto pt-10" align="center">
        <CircularProgress />
      </div>
    );

  return (
    <div className="">
      <FixtureItem fixture={match[0]} />
    </div>
  );
}
