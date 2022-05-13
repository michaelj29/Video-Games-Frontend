import VideoGameChart from "./Components/VideoGameChart";
import Header from "./Components/Header";
import React, { useState, useEffect } from 'react';
import axios from "axios";


function App() {
  
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, []);
    
  async function getAllVideoGames() {
    try {
      let response = await axios.get("https://localhost:7260/api/games/");
      console.log("This is our axios call", response.data);
      setVideoGames(response.data);
    } catch (err) {
      console.log("Error in getAllVideoGames function.");
    }
  }
 

  return (
    <div>
      <Header />
      <VideoGameChart videoGames={videoGames}/>
    </div>
  );
}

export default App;
