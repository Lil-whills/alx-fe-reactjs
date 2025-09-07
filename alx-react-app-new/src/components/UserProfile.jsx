const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          marginTop: "20px",
          color: "gray",
        }}
      >
        <span>{props.name}</span>
      </h2>
      <p
        style={{
          fontSize: "17px",
          marginTop: "10px",
          color: "white",
        }}
      >
        Age: {props.age}
      </p>
      <p
        style={{
          fontSize: "20px",
          marginTop: "20px",
          color: "green",
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
