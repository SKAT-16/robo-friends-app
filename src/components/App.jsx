import CardList from "./CardList";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";

const App = () => {

  return (
    <div className="font-roboto relative">
      <NavBar />
      <CardList />
      <SideBar />
    </div>
  );
};

export default App;
