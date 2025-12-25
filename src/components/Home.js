import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Our Things</h1>
      <p>Choose a game to play:</p>
      <div className="game-links">
        <Link to="/wordle" className="game-link">
          Wordle
        </Link>
        <Link to="/connections" className="game-link">
          Connections
        </Link>
        <Link to="/strands" className="game-link">
          Strands
        </Link>

        {/* <Link to="/strandsinput" className="game-link">
          Strands Input
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
