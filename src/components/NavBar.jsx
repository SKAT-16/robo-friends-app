import { useDispatch, useSelector } from "react-redux";
import { filterRobots } from "../store/robotsSlice";
import searchBTN from "../assets/search-btn.png";

const NavBar = () => {
  return (
    <div className="bg-gradient-to-br from-left-gradient to-right-gradient shadow-lg flex flex-col items-center justify-center fixed w-full top-0 left-0 pb-6">
      <h1 className="shadow-xl cursor-default font-logo font-medium text-4xl md:text-6xl text-center p-5 mt-3 mb-4 header-anim">
        ROBOBLOG
      </h1>
      <SearchBar />
    </div>
  );
};

const SearchBar = () => {
  const robots = useSelector((state) => state.robotsReducer.robots);
  const loading = useSelector((state) => state.robotsReducer.loading);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterRobots(e.target.value));
  };

  return (
    <div className="bg-cyan-200 rounded-md px-3 py-2 flex items-center justify-center hover:scale-105 transition-transform duration-300">
      <input
        className="bg-transparent outline-none w-[250px] md:w-[500px] text-sm md:text-md"
        type="search"
        placeholder={loading === "pending" ? "fetching active robots..." :`${robots.length} online...`}
        onChange={handleSearch}
      />
      <img
        src={searchBTN}
        alt="search-icon"
        className="w-5 h-5 md:w-6 md:h-6"
      />
    </div>
  );
};

export default NavBar;
