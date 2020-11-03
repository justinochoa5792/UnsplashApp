import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

import SearchBar from "./Component/SearchBar";
import ImageList from "./Component/ImageList";

function App() {
  const [item, setItem] = useState([]);

  async function onSearchSubmit(term) {
    const response = await Axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 1QEFVARnjk__7cew3Va9jOdZowJhW-pa7IMcVwGm21s",
      },
    });
    setItem(response.data.results);
  }
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar pictures={onSearchSubmit} />
      <ImageList item={item} />
    </div>
  );
}

export default App;
