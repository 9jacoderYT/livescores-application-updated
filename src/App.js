import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { fetchFixtures, fetchTesting } from "./lib/fetch-data";
import Table from "./components/table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fixture from "./components/fixture";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CachedIcon from "@mui/icons-material/Cached";
import Modal from "./components/modal";
import Footer from "./components/footer";
import EPL from "./components/standings/epl";
import SerieA from "./components/standings/serieA";
import Laliga from "./components/standings/laliga";
import Bundesliga from "./components/standings/bundesliga";
import Ligue from "./components/standings/ligue";

function App() {
  const [fixtures, setFixtures] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const fetchInfo = async () => {
    const data = await fetchFixtures();
    const test = await fetchTesting();

    const italy = test.response.filter((match) => {
      return match.country.name === "Spain";
    });

    console.log(italy);

    setFixtures(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const refresh = () => window.location.reload(true);

  const showPopUpHandler = () => {
    setPopUp(true);
  };
  const hidePopUpHandler = () => {
    setPopUp(false);
  };

  if (fixtures.length === 0)
    return (
      <div className=" bg-white m-auto pt-10" align="center">
        <CircularProgress />
      </div>
    );

  return (
    <>
      <div className="w-full md:w-[700px] lg:w-[800px] m-auto">
        <NavBar onOpen={showPopUpHandler} onClose={hidePopUpHandler} />

        {popUp && <Modal onClose={hidePopUpHandler} />}

        <button
          onClick={refresh}
          className="btn btn-sm fixed bottom-3 right-2 z-40"
        >
          <CachedIcon />
        </button>

        {fixtures.length == 0 ? (
          <div className=" bg-white w-full text-center p-10">
            <Box>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Table data={fixtures} />}></Route>
              <Route path="/epl" element={<EPL />}></Route>
              <Route path="/seriea" element={<SerieA />}></Route>
              <Route path="/laliga" element={<Laliga />}></Route>
              <Route path="/bundesliga" element={<Bundesliga />}></Route>
              <Route path="/ligue" element={<Ligue />}></Route>
              <Route
                path="/fixture/:matchID"
                element={<Fixture data={fixtures} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
