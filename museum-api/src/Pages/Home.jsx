import React from "react";
import Objects from "../Components/Objects";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <main className="background-cover">
      <SearchForm />
      <Objects />
    </main>
  );
};

export default Home;
