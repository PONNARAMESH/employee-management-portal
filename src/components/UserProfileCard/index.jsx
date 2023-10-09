import "./styles.css";
export const UserProfileCard = (props) => {
  const { userName, userPhoto } = props;
  return (
    <div className="userProfileCard">
      <div className="userName">
        <b>{userName || "Jimmy!"}</b>
      </div>
      <div className="userPhoto">
        <img alt="user-photo" src={userPhoto || ""} />
      </div>
    </div>
  );
};
