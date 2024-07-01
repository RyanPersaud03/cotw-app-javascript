import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchbar/SearchBar";
import ReserveCard from "../../components/reserve-card/ReserveCard";
import "./reserve.css";

function Reserve() {
  return (
    <>
    <Header />
    <SearchBar />
    <ReserveCard />
    {/* <div className="vanilla">
    <h4>Non-DLC</h4>
    <ul>
      <li>Layton lakes</li>
      <li>Hershfeldon</li>
    </ul>
    </div>
    <div className="dlc">
    <h4>DLC</h4>
    <ul>
      <li>Medved-Taiga National Park</li>
      <li>Vurhonga Savanna</li>
      <li>Parque Fernando</li>
      <li>Yukon Valley</li>
      <li>Cuatro Colinas Game Reserve</li>
      <li>Silver Ridge Peaks</li>
      <li>Te Awaroa National Park</li>
      <li>Rancho del Arroyo</li>
      <li>Mississippi Acres Preserve</li>
      <li>Revontuli Coast</li>
      <li>New England Mountains</li>
      <li>Emerald Coast</li>
      <li>Sundarpatan</li>
    </ul>
    </div> */}
    </>
  )
}

export default Reserve;