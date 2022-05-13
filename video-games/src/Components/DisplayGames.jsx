import React, { useState, useEffect } from "react";
import axios from "axios";
const DisplayGames = props => {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    async function getAllVideoGames() {
      try {
        let response = await axios.get("https://localhost:7260/api/games/");
        console.log(response.data);
        setVideoGames(response.data);
      } catch (err) {
        console.log("Error in getAllVideoGames function.");
      }
    }
    getAllVideoGames();
  }, []);

  return (
    <>
      {videoGames.map(game => {
        return (
          <div key={game.id}>
            <ul>
              <li>{game.name}</li>
              <li>{game.globalSales}</li>
              <li>{game.platform}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default DisplayGames;
