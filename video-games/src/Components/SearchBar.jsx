import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

   function handleSubmit(event){
       event.preventDefault();
       console.log(props.search)
       //console.log('Here is the event ' + event)
       props.search(search);
   };

  function onChange(e) {
    let newValue = e.target.value;
    setSearch(newValue);
    console.log(newValue);
  }

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search any topic"
          className="me-2"
          aria-label="Search"
          onChange={onChange}
          value={search}
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;
