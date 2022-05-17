import React, {useState} from "react";
import { CardBody, CardTitle, Button, CardSubtitle } from "reactstrap";
import { Chart } from "react-google-charts";

const DisplayGameSearch = props => {
    const[toggle,setToggle]=useState(false)
    const [chartData, setChartData] =useState([])



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
      
      for (let i = 0; i < allGamesForPlatform.length; i++){
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
    setToggle(true)
    setChartData(data)
    return data;
  }

  return (
    <div>
      {props.gameSearch.map(game => {
        return (
          <>
            <CardBody>
              <CardTitle tag="h5">{game.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Rank: {game.rank}, Genre: {game.genre}, Year: {game.year}, Publisher: {game.publisher} </CardSubtitle>
              <Button color="primary" size ="sm"
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

            </CardBody>
          </>
        );
      })}
      {toggle ? <>
                <Chart
                  chartType="ColumnChart"
                  width="100%"
                  height="400px"
                  data={chartData}
                />
              </> : <p>Search game for results</p>}
      
    </div>
  );
};

export default DisplayGameSearch;
