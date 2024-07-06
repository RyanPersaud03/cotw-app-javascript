import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchbar/SearchBar";
import WildCard from "../../components/wildlife-card/WildCard";
import "./wildlife.css"

function Wildlife() {
  return (
    <>
    <Header />
    <SearchBar />
    <WildCard />
    </>
  )
}

export default Wildlife;