
  const UserProfile = (props) => {
   return (
     <div>
       <h2 style={{fontSize: "28px", marginTop: "20px", color: "gray"}}>{props.name}</h2>
       <p style={{fontSize: "17px", marginTop: "10px", color: "white"}}>Age: {props.age}</p>
       <p style={{fontSize: "20px", marginTop: "20px", color: "green"}}>Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;
  