import { useState, useContext, useEffect } from "react";
import userContext from "./Context/userContext";
import User from "./User";
import "./Modal.css";
import Modal from "./Modal";

const Edit = () => {
  const context = useContext(userContext);
  const { editUser, fetchUsers, users, addUser } = context;
  const [user, setUser] = useState({
    id: "",
    editFirstName: "",
    editLastName: "",
    editGender: "",
    editUsername: "",
    editImage: "",
    editEmail: "",
  });

  const [modalEdit, setModalEdit] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const toggleModal = (currentUser) => {
    setModalEdit(!modalEdit);
    setUser({
      id: currentUser.id,
      editFirstName: currentUser.firstName,
      editLastName: currentUser.lastName,
      editGender: currentUser.gender,
      editUsername: currentUser.username,
      editImage: currentUser.image,
      editEmail: currentUser.email,
    });
  };

  useEffect(() => {
    fetchUsers();

    // eslint-disable-next-line
  }, []);

  const handleClickEdit = (e) => {
    editUser(
      user.id,
      user.editFirstName,
      user.editLastName,
      user.editGender,
      user.editUsername,
      user.editImage,
      user.editEmail
    );
    setModalEdit(!modalEdit);
  };

  const handleClickAdd = (e) => {
    addUser(
      user.editFirstName,
      user.editLastName,
      user.editGender,
      user.editUsername,
      user.editImage,
      user.editEmail
    );
    setModalAdd(!modalAdd);
    setUser({
      editFirstName: "",
      editLastName: "",
      editGender: "",
      editUsername: "",
      editImage: "",
      editEmail: "",
    });
  };

  const onChangeEdit = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        style={{ margin: "20px 0px 15px 600px" }}
        onClick={() => setModalAdd(!modalAdd)}
      >
        Add User
      </button>

      {modalAdd && (
        <Modal
          onChange={onChangeEdit}
          title={"Add User"}
          handleClick={handleClickAdd}
          message={"You can see New User Added output in console"}
          user={[]}
          setModal={setModalAdd}
        />
      )}

      {users?.users?.map((user) => {
        return <User user={user} key={user.id} toggleModal={toggleModal} />;
      })}

      {modalEdit && (
        <Modal
          onChange={onChangeEdit}
          handleClick={handleClickEdit}
          user={user}
          setModal={setModalEdit}
          title={"Edit User"}
          message={"You can see Edited User output in console"}
        />
      )}
    </div>
  );
};

export default Edit;
