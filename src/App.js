import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailArtist from "./components/DetailArtist/DetailArtist";
import ListArtist from "./components/Listartist/ListArtist";
import AlbumList from "./components/AlbumList/AlbumList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=31a87eab3dd16970ef7c923c290aab60&format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results.artistmatches.artist);
        setPosts(data.results.artistmatches.artist);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, []);

  const handleOnSearch = (name) => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}cher&api_key=31a87eab3dd16970ef7c923c290aab60&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results.artistmatches.artist);
        setPosts(data.results.artistmatches.artist);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
      <DetailArtist onClick={handleOnSearch} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListArtist options={posts} />} />
          <Route exact path="/album/:id" element={<AlbumList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
