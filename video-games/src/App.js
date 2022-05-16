import VideoGameChart from "./Components/VideoGameChart";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import DisplayGames from "./Components/DisplayGames";
import DisplayGameSearch  from "./Components/DisplayGameSearch";



function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [gameSearch, setGameSearch] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, []);

  async function getAllVideoGames() {
    try {
      let response = await axios.get("https://localhost:7260/api/games/");
      // console.log("This is our axios call", response.data);
      setVideoGames(response.data);
    } catch (err) {
      console.log("Error in getAllVideoGames function.");
    }
  }

  function searchVideoGames(searchInput) {
    let results = videoGames.filter(game => game.name.toLowerCase() === searchInput.toLowerCase());
    setGameSearch(results);
  }

  return (
    <div>
      <Header search={searchVideoGames}/>
      <DisplayGameSearch gameSearch={gameSearch}/>
      <VideoGameChart videoGames={videoGames} />
      <DisplayGames games={videoGames} />
    </div>
  );
}

export default App;
