import React from 'react';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState();

    useEffect(() => {
        fetch('https://backend.spiderthings.co.in/api/v1/microservice/data', )
            .then((response) => response.json())
            .then((data) => {
                console.log({data});
                setItems(data)
            })
            .catch((error) => console.error('Error fetching data from Service: ', error));
    },[])

  return (
    <div className="App">
        <div className="App-header">
            {items?.map((i) => <li key={i?.id}>{i?.name}</li>)}
        </div>
    </div>
  );
}
export default App;
