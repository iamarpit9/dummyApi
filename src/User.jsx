import "./Users.css";
const User = ({ user, toggleModal }) => {
  return (
    <>
      <div className="flex">
        <img src={user.image} alt="" />
        <div className="data name">
          {user.firstName} {user.lastName}
        </div>
        <div className="data">{user.id}</div>
        <div className="data email">{user.email}</div>
        <div className="data">{user.gender}</div>
        <div className="data username">{user.username}</div>
        <button className="editBtn" onClick={() => toggleModal(user)}>
          Edit{" "}
        </button>
      </div>
    </>
  );
};

export default User;
