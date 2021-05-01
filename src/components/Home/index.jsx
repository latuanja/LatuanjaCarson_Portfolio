import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
    return (
        <div className="home">
          <div className="title">
            <h1>
              <p>Hi there,</p>
              <p>I'm Latuanja Carson, a</p>
              <p>Full Stack Software Developer!</p>
            </h1>
            <Link to="/about">
              <button>More Info</button>
            </Link>
          </div>
          <div className="person">
            <img src={`${process.env.PUBLIC_URL}/lc-photo.jpg`} alt="latuanja"/>
          </div>
        </div>
      );
    };
export default Home;
