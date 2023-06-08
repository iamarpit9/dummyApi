import "./Modal.css";

const Modal = ({ onChange, handleClick, setModal, user, title, message }) => {
  return (
    <>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h2>{title}</h2>
            <form>
              <img src={user.editImage} alt="" className="profileimg" />
              <div className="inp">
                <label htmlFor="editFirstName"> First Name </label>
                <input
                  type="text"
                  id="editFirstName"
                  name="editFirstName"
                  onChange={onChange}
                  value={user.editFirstName}
                />
              </div>
              <div className="inp">
                <label htmlFor="editLastName"> Last Name </label>
                <input
                  type="text"
                  id="editLastName"
                  name="editLastName"
                  onChange={onChange}
                  value={user.editLastName}
                />
              </div>
              <div className="inp">
                <label htmlFor="editEmail"> Email </label>
                <input
                  type="text"
                  id="editEmail"
                  name="editEmail"
                  onChange={onChange}
                  value={user.editEmail}
                />
              </div>
              <div className="inp">
                <label htmlFor="editGender"> Gender </label>
                <input
                  type="text"
                  id="editGender"
                  name="editGender"
                  onChange={onChange}
                  value={user.editGender}
                />
              </div>
              <div className="inp">
                <label htmlFor="editUsernames"> Username </label>
                <input
                  type="text"
                  id="editUsername"
                  name="editUsername"
                  onChange={onChange}
                  value={user.editUsername}
                />
              </div>
            </form>

            <div className="buttons">
              <button className="btn" onClick={() => setModal(false)}>
                Close
              </button>
              <button className="btn" onClick={handleClick}>
                {title}
              </button>
            </div>
            <p className="redText">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
