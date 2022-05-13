import { React, useState } from "react";
import { Input, Label, Button } from "reactstrap";

const SearchBar = props => {
  const [search, setSearch] = useState("");

  function onChange(e) {
    let newValue = e.target.value;
    setSearch(newValue);
    console.log(newValue);
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   let newSearch = search
  //   props.searchKeyWord(newSearch)
  // }

  return (
    <>
      <div>
        <Label> Search </Label>
        <Input
          bsSize="sm"
          value={search}
          name="searchVideoGames"
          search={search}
          onChange={onChange}
        />
        <Button type="submit" value="Submit" /*handleSubmit={handleSubmit}*/>
          Submit
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
