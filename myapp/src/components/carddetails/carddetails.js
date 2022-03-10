import React from "react";
import CardView from "../card/card";
import '../carddetails/carddetails.css';

function CardDetails({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }

  return (
    <div className="listview">
      {data.map((item) => (
        <CardView key={item.imdbID} movie={item} />
      ))}
    <div class="clearfix"></div></div>
  );
}

export default CardDetails;