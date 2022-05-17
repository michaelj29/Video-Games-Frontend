import { React } from "react";
import { Chart } from "react-google-charts";

const VideoGameChart = ({ videoGames }) => {


  function generateDateFormChart() {

    let filteredGames = videoGames.filter(game => game.year >= 2013);
    let platforms = filteredGames.map(game => {
      return game.platform;
    });
    let distinctPlatforms = [...new Set(platforms)];
    let platformArrays = distinctPlatforms.map(platform => {
      let sum = 0;
      let allGamesForPlatform = filteredGames.filter(
        game => game.platform === platform
      );
      for (let i = 0; i < allGamesForPlatform.length; i++){
        // console.log(allGamesForPlatform[i].globalSales)
          sum += allGamesForPlatform[i].globalSales;
        }
        return [platform, sum, "red"];
  });

    const data = [
      ["Platform", "Sales in Millions", { role: "style" }],
      ...platformArrays,
    ];
    return data;
  }

  return (
    <>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDateFormChart()}
      />
      ;
    </>
  );
};

export default VideoGameChart;
