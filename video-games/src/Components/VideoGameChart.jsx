import { React } from "react";
import { Chart } from "react-google-charts";

const VideoGameChart = ({ videoGames }) => {


  function generateDateFormChart() {
    // console.log("These Video Games", videoGames);
    let filteredGames = videoGames.filter(game => game.year >= 2013);
    // console.log("filtered games", filteredGames);
    let platforms = filteredGames.map(game => {
      return game.platform;
    });
    // console.log(platforms, "platforms");
    let distinctPlatforms = [...new Set(platforms)];
    //console.log("Distinct Platforms", distinctPlatforms);
    let platformArrays = distinctPlatforms.map(platform => {
      let sum = 0;
      let allGamesForPlatform = filteredGames.filter(
        game => game.platform === platform
      );
      for (let i = 0; i < allGamesForPlatform.length; i++){
        //NEED GLOBAL SALES FOR EACH PLATFORM 
        //THE LOGIC NEEDS TO BE COMPLETED 
        //console.log(allGamesForPlatform[i].globalSales + " " + allGamesForPlatform[i] + " " + allGamesForPlatform[i].platform)
        console.log(allGamesForPlatform[i].globalSales)
          sum += allGamesForPlatform[i].globalSales;
        }
        return [platform, sum, "red"];
  });

    // console.log("platform array", platformArrays);
    const data = [
      ["Platform", "Sales", { role: "style" }],
      ...platformArrays,
      // ["Playstation", 8.94, "red"], // RGB value
      // ["Silver", 10.49, "red"], // English color name
      // ["Gold", 19.3, "red"],
      // ["Platinum", 21.45, "red"], // CSS-style declaration
    ];
    // console.log("data", data);

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
