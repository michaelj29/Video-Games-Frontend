import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'

const SearchBar = (props) => {
    const [search, setSearch] = useState('');

    // function handleSubmit(event){
    //     event.preventDefault();
    //     props.search(search)
    // }

    function onChange(e){
      (e) => setSearch(e.target.value)
      e.preventDefault();
      props.search(search)
    }

    return ( 
        <div>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search any topic"
                className="me-2"
                aria-label="Search"
                onChange={(onChange)} 
                
                value={search}
                />
              
                    {/* <Button type="submit" variant="outline-success">Search</Button> */}

            </Form>
        </div>

     );
}
 
export default SearchBar;