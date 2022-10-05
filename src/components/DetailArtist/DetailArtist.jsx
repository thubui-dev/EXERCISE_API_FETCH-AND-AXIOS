import React, { useState } from "react";
import "./detailartist.css";

function DetailArtist(props) {
  const [name, setName] = useState();

  const onTitleChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const search = () => {
    props.onClick(name);
  };

  return (
    <div>
      <h1>@@@@@ARTIST LIST@@@@@</h1>
      <input
        onChange={onTitleChange}
        value={name}
        type="text"
        className="iptSearch"
      />
      <button className="btnSearch" onClick={search}>
        Search
      </button>
    </div>
  );
}

export default DetailArtist;
