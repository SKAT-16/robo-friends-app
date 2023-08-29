import { useSelector, useDispatch } from "react-redux";
import { findRobot, getRobots } from "../store/robotsSlice";
import { useEffect, useState } from "react";
import loadingGIF from "../assets/loading.webp";

const CardList = () => {
  const robots = useSelector((state) => state.robotsReducer.filteredRobots);
  const loading = useSelector((state) => state.robotsReducer.loading);
  const error = useSelector((state) => state.robotsReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRobots());
  }, []);

  if (loading === "pending")
    return (
      <p className="text-white text-xl text-center pt-56 animate-pulse">
        <em> loading </em>
      </p>
    );
  else if (loading === "failed")
    return (
      <p className="text-white text-xl text-center pt-56 animate-pulse">
        <em> {error} :( </em>
      </p>
    );
  else
    return (
      <div className="pt-56 pb-10 px-8 grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-center">
        {robots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            avatar={robot.avatar}
            email={robot.email}
            fullname={robot.fullName}
            username={robot.userName}
          />
        ))}
      </div>
    );
};

const Card = ({ id, avatar, email, username }) => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (loaded) dispatch(findRobot(id));
  };

  return (
    <div
      className="bg-blue-400 border-1 rounded-lg p-3 shadow-xl cursor-pointer flex flex-col items-center justify-center transition duration-200 hover:bg-cyan-300 hover:scale-105 active:scale-90 ease-in-out"
      onClick={handleClick}>
      <img
        src={avatar}
        alt="robot-img"
        className={`w-[150px] h-[150px] md:w-[150px] md:h-[150px] flex items-center justify-center ${
          loaded ? "block" : "hidden"
        }`}
        onLoad={() => setLoaded(true)}
      />
      <img
        src={loadingGIF}
        alt="loading-gif"
        className={`cursor-wait ${loaded ? "hidden" : "block"}`}
      />

      <h2 className="mt-3 text-md">
        @<em>{username}</em>
      </h2>
      <p className="text-[10px]">{email}</p>
    </div>
  );
};

export default CardList;