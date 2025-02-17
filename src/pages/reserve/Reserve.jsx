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
    </>
  )
}

export default Reserve;