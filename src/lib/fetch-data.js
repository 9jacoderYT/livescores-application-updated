export const fetchFixtures = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b0a905d65msh006cf8356da27ecp14532bjsn91a76b81e7b2",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};

export const fetchStandings = async (leagueID) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b0a905d65msh006cf8356da27ecp14532bjsn91a76b81e7b2",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${leagueID}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};



export const fetchTesting = async (leagueID) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b0a905d65msh006cf8356da27ecp14532bjsn91a76b81e7b2",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};