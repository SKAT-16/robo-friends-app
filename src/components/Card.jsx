const Card = ({id, fullname, email, username}) => {
  return (
    <div className="tc bg-light-green br3 pa3 ma2 grow dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot-img" />
      <div >
        <h2>{username}</h2>
        <p className="tc">{fullname} <br /> {email}</p>
      </div>
    </div>
  );
};

export default Card;
