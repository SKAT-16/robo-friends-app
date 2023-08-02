import Card from "./Card";

const CardList = ({robots}) => {
  
  return (
    <div>
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
