import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import SearchBar from "./Component/SearchBar";

function App() {
  const [item, setItem] = useState([]);

  async function onSearchSubmit(term) {
    const response = await Axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 1QEFVARnjk__7cew3Va9jOdZowJhW-pa7IMcVwGm21s",
      },
    });
    console.log(response.data.results);
    setItem(response.data.results);
  }
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar pictures={onSearchSubmit} />
      {item.map((eachItem) => {
        return (
          <ul>
            <img src={eachItem.urls.small} alt={eachItem.id} />
            <li>Description: {eachItem.alt_description}</li>
            <li>
              Name: {eachItem.user.first_name} {eachItem.user.last_name}
            </li>
            <li> Instagram: {eachItem.user.instagram_username}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
