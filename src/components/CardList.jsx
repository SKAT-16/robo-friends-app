import Card from "./Card";

const CardList = ({robots}) => {
  
  return (
    <div className="br3">
      {robots.length === 0 && <p className="white"><em>:( robots not found! </em></p>}
      {robots.map((robot, index) => (
        <Card
          key={index}
          id={index}
          fullname={`${robot.name.first} ${robot.name.last}`}
          email={robot.email}
          username={robot.login.username}
        />
      ))}
    </div>
  );
};

export default CardList;
