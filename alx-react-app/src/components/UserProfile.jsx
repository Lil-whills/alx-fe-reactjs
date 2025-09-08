import { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "15px",
        borderRadius: "8px",
        marginTop: "20px",
        maxWidth: "300px",
      }}
    >
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserProfile;
