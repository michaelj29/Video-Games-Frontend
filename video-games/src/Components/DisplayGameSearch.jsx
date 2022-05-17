import React, { useState } from "react";
import { Card, CardTitle, Button, CardSubtitle } from "reactstrap";
import { Chart } from "react-google-charts";
import "./DisplayGameSearch.css";

const DisplayGameSearch = props => {
  const [toggle, setToggle] = useState(false);
  const [chartData, setChartData] = useState([]);

  function displayGameData(selectedGame) {
    // console.log(selectedGame);
    let newSelectedGame = props.gameSearch.filter(
      game => game.name.toLowerCase() === selectedGame.name.toLowerCase()
    );
    let platforms = newSelectedGame.map(game => {
      return game.platform;
    });

    let distinctPlatforms = [...new Set(platforms)];
    let sum = 0;
    let platformArrays = distinctPlatforms.map(platform => {
      let allGamesForPlatform = newSelectedGame.filter(
        game => game.platform === platform
      );
      // console.log(allGamesForPlatform)

      for (let i = 0; i < allGamesForPlatform.length; i++) {
        sum = 0;
        sum += allGamesForPlatform[i].globalSales;
      }
      return [platform, sum, "green"];
    });

    const data = [
      ["Platform", "Number of copies", { role: "style" }],
      ...platformArrays,
    ];
    // console.log(data);
    setToggle(true);
    setChartData(data);
    return data;
  }

  return (
    <div className="search-results">
      {props.gameSearch.map(game => {
        return (
          <div>
            <Card className="game-card">
              <CardTitle className="game-title" tag="h6">
                {game.name}
              </CardTitle>
              <CardSubtitle className="text-muted game-subtitle" tag="h6">
                Rank: {game.rank}, Genre: {game.genre}
              </CardSubtitle>
              <CardSubtitle className="text-muted game-subtitle" tag="h6">
                Year: {game.year}, Publisher: {game.publisher}
              </CardSubtitle>
              <Button
                color="primary"
                size="sm"
                onClick={() => {
                  displayGameData(game);
                }}
              >
                View Game Data
              </Button>
            </Card>
          </div>
        );
      })}
      {toggle ? (
        <>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={chartData}
          />
        </>
      ) : (
        <p>Search game for results</p>
      )}
    </div>
  );
};

export default DisplayGameSearch;
