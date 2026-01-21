import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";


const Home = () => {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/hello/")
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message));
  // }, []);


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
