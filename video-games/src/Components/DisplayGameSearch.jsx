import React from "react";
import { FormGroup } from "reactstrap";
import { CardBody, CardTitle, Button } from "reactstrap"

const DisplayGameSearch = (props) => {


  function displayGameData(selectedGame){
    console.log(selectedGame)

  }
  return (
    <div>
      {props.gameSearch.map(game => {
        return (
          <>
            <CardBody>
            <CardTitle tag="h5">{game.name}</CardTitle>
            <Button onClick={() => displayGameData(game)}>View Game Data</Button>
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
    </div>
  );
}

export default DisplayGameSearch;