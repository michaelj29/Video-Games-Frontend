import React from "react";
import { Chart } from "react-google-charts";

const EvaluationChart = ({videoGames}) => {

    function generateEvaluationChart(){
        let filteredGames = videoGames.filter(game => game.year >= 2000 && game.year <= 2005)
        let platforms = filteredGames.map(game => {
            return game.platform
        });
        let distinctPlatforms = [...new Set(platforms)];
        // console.log("Evaluation Chart", filteredGames)
        let platformArrays = distinctPlatforms.map( platform => {
            let sum = 0;
            let allGamesForPlatform = filteredGames.filter(
                game => game.platform === platform
            );
            for (let i = 0; i < allGamesForPlatform.length; i++){
                sum += allGamesForPlatform[i].europeSales;
            }
            return [platform, sum, "purple"]
        });

        const data = [
            ["Platform", "Europe Sales in Millions", { role: "style" }],
            ...platformArrays
        ];
        return data;

    }

    return ( 
        <>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={generateEvaluationChart()}
        />
        ;
      </>

     );
}
 
export default EvaluationChart;