import React from "react";
import { CardBody, CardTitle, Button } from "reactstrap";
import { Chart } from "react-google-charts";

const DisplayGameSearch = props => {
  function displayGameData(selectedGame) {
    console.log(selectedGame);
    let newSelectedGame = props.gameSearch.filter(
      game => game.name.toLowerCase() === selectedGame.name.toLowerCase()
    );
    console.log(newSelectedGame);
    let platforms = newSelectedGame.map(game => {
      return game.platform;
    });
    // console.log(platforms);
    let distinctPlatforms = [...new Set(platforms)];
    // console.log(distinctPlatforms);
    let platformArrays = distinctPlatforms.map(platform => {
      let allGamesForPlatform = newSelectedGame.filter(
        game => game.platform === platform
      );
      for (let i = 0; i < allGamesForPlatform.length; i++)
        return [platform, allGamesForPlatform.length, "green"];
    });
    console.log(platformArrays);

    const data = [
      ["Platform", "Number of copies", { role: "style" }],
      ...platformArrays,
      // ["Element", "Density", { role: "style" }],
      // ["Copper", 8.94, "#b87333"], // RGB value
      // ["Silver", 10.49, "silver"], // English color name
      // ["Gold", 19.3, "gold"],
      // ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ];
    console.log(data);
    return (
      <>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
      </>
    );
  }

  return (
    <div>
      {props.gameSearch.map(game => {
        return (
          <>
            <CardBody>
              <CardTitle tag="h5">{game.name}</CardTitle>
              <Button
                onClick={() => {
                  displayGameData(game);
                }}
              >
                View Game Data
              </Button>
              {/* <li>{game.rank}</li>
              <li>{game.year}</li>
              <li>{game.genre}</li>
              <li>{game.publisher}</li>
              <li>{game.northAmericaSales}</li>
              <li>{game.europeSales}</li>
              <li>{game.japanSales}</li>
              <li>{game.otherSales}</li>
              <li>{game.globalSales}</li> */}
              {/* <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={displayGameData()}
              /> */}
            </CardBody>
          </>
        );
      })}
    </div>
  );
};

export default DisplayGameSearch;
