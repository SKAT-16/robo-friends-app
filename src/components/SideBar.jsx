import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findRobot } from "../store/robotsSlice";

export const SideBar = () => {
  const robot = useSelector((state) => state.robotsReducer.currentRobot);
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(findRobot(""));
  };

  if (robot)
    return (
      <div className="z-50">
        <div
          className="fixed top-0 left-0 w-[40%] md:w-[55%] h-[100%] bg-black bg-opacity-50"
          onClick={handleExit}
        />
        <div
          className={`fixed top-0 right-0 h-full bg-gradient-to-b from-cyan-800 to-green-800 w-[60%] md:w-[45%] p-4 shadow-lg flex flex-col items-center justify-center`}>
          <img
            src={robot.avatar}
            alt="robot-img"
            className="w-[150px] h-[150px] growAnim shadow-xl"
          />
          <h2 className="mt-5 text-white text-3xl md:text-4xl font-bold">
            {robot.fullName}
          </h2>
          <h3 className="text-sm md:text-md text-gray-200 underline italic font-light">thoughts & beliefs</h3>
          <p className="text-white text-[12px] md:text-[15px] text-justify m-3 md:m-5 overflow-y-auto font-thin">{robot.essay}</p>
        </div>
      </div>
    );
};
