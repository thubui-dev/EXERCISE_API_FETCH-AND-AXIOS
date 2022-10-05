import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AlbumList() {
  const [albums, setAlbums] = useState([]);

  let { id } = useParams();

  function getAlbum() {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${id}cher&api_key=e00bd7ca22083b84e9a86891c052d3f2&format=json`
      )
      .then((response) => response.data)
      .then((data) => {
        // console.log(data.topalbums.album);
        setAlbums(data.topalbums.album);
      });
  }
  useEffect(() => {
    getAlbum();
  }, []);
  // console.log(albums);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Playcount</th>
        <th>Link</th>
        <th>Imagine</th>
      </tr>
      <>
        {albums.map((option) => (
          <tr key={option.name} className="table-row">
            <td>{option.name}</td>
            <td>{option.playcount}</td>
            <td>
              <a href={option.url} target="_blank" rel="noopener noreferrer">
                {option.url}
              </a>
            </td>
            <td>
              <img src={option.image[0]["#text"]} alt="" />
            </td>
          </tr>
        ))}
      </>
    </table>
  );
}

export default AlbumList;
