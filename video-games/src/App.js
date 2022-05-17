import VideoGameChart from "./Components/VideoGameChart";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EvaluationChart from "./Components/EvaluationChart";
import "./App.css";
import DisplayGameSearch from "./Components/DisplayGameSearch";
import { Chart } from "react-google-charts";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [gameSearch, setGameSearch] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getAllVideoGames();
  }, []);

  async function getAllVideoGames() {
    try {
      let response = await axios.get("https://localhost:7260/api/games/");
      // console.log("This is our axios call", response.data);
      setVideoGames(response.data);
    } catch (err) {
      // console.log("Error in getAllVideoGames function.");
    }
  }

  function searchVideoGames(searchInput) {
    let results = videoGames.filter(game =>
      game.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setGameSearch(results);
  }

  return (
    <div>
      <Header search={searchVideoGames} />
      <VideoGameChart videoGames={videoGames} />
      <EvaluationChart videoGames={videoGames} />
      {toggle ? (
        <>
          <div className="title">
            <h4>Game Copies Sold 2013 - Present</h4>
          </div>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={chartData}
            />
        </>
      ) : (
        <p></p>
        )}
      <div className="search-container">
        <DisplayGameSearch setToggle={setToggle} setChartData={setChartData} gameSearch={gameSearch} />
      </div>
        </div>
  );
}

export default App;
