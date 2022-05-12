import {React, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const VideoGameChart = (props) => {


const [videoGames, setVideoGames] = useState([])
const [chartData, setChartData] = useState([])

useEffect(() => {
  getAllVideoGames();
});

useEffect(() => {
  let tempChartData = videoGames.map(entry => {
      return [entry.year]
  });
  setChartData(tempChartData);
}, [0])


  async function getAllVideoGames(){
    try {
      let response = await axios.get('https://localhost:7260/api/games/1/');
      console.log(response.data)
      setVideoGames(response.data)
    } catch (err) {
      console.log('Error in getAllVideoGames function.')
    }
  }

  return (
    <div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={[...chartData]}
        // options={options}
      />
    </div>
  );
};

export default VideoGameChart;

{
  /* export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
    export const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
      }; */
}
