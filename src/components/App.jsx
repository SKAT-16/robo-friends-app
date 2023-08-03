import { useState, useEffect, useRef } from "react";
import CardList from "./CardList";
import axios from "axios";
import SearchBox from "./SearchBox";

const App = () => {
  const [robots, setRobots] = useState([]);
  const initialRobots = useRef([]);
  useEffect(() => {
    const getInitialRobots = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${Math.floor(
          Math.random() * 200
        )}&inc=name,email,login`
      );
      setRobots(response.data.results);
      initialRobots.current = response.data.results;
    };
    getInitialRobots();
  }, []);

  const handleSearch = (e) => {
    const searchField = e.target.value;
    function containsIgnoreCase(mainString, searchString) {
      const regex = new RegExp(searchString, "i");
      return regex.test(mainString);
    }

    setRobots(
      initialRobots.current.filter(
        (robot) => containsIgnoreCase(robot.name.first, searchField) || 
                  containsIgnoreCase(robot.name.last, searchField) || 
                  containsIgnoreCase(robot.login.username, searchField)
      )
    );
  };

  return (
    <div className="tc">
      <h1 className="f1">ROBOFRIENDS</h1>
      <SearchBox onSearch={handleSearch} />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
