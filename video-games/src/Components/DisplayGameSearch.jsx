import React from "react";

const DisplayGameSearch = (props) => {

  return (
    <div>
      {props.gameSearch.map(game => {
        return (
          <>
          <h2>{game.name}</h2>
            <ul>
              <li>{game.rank}</li>
              <li>{game.year}</li>
              <li>{game.genre}</li>
              <li>{game.publisher}</li>
              <li>{game.northAmericaSales}</li>
              <li>{game.europeSales}</li>
              <li>{game.japanSales}</li>
              <li>{game.otherSales}</li>
              <li>{game.globalSales}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default DisplayGameSearch;