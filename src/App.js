import "./App.css";
import UserState from "./Context/UserState";
import Edit from "./Edit";
// import Results from "./Results";

function App() {
  return (
    <UserState>
      <Edit />{" "}
    </UserState>
  );
}

export default App;
