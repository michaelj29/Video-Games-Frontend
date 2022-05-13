import { React, } from "react";
import { Chart } from "react-google-charts";


const VideoGameChart = ({videoGames}) => {


  function generateDateFormChart() {

    console.log("These Video Games", videoGames)
    let filteredGames = videoGames.filter(game => game.year > 2013);



    const data = [
      ["Platform", "Sales", { role: "style" }],
      ["Playstation", 8.94, "red"], // RGB value
      ["Silver", 10.49, "red"], // English color name
      ["Gold", 19.3, "red"],
      ["Platinum", 21.45, "red"], // CSS-style declaration
    ];
    
    return data;
  }

  return (
    <>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDateFormChart} />;
    </>
  );
};

export default VideoGameChart;
