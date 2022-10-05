import React from "react";
import { NavLink } from "react-router-dom";
import "./listartist.css";

function ListArtist(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Listeners</th>
        <th>Link</th>
        <th>Imagine</th>
      </tr>

      {props.options.map((option) => (
        <tr key={option.name} className="table-row">
          <td>
            <NavLink to={`/album/${option.name}`}>{option.name}</NavLink>
          </td>
          <td>{option.listeners}</td>
          <td>{option.url}</td>
          <td>
            <img src={option.image[1]["#text"]} alt="" />
          </td>
        </tr>
      ))}
    </table>
  );
}

export default ListArtist;
