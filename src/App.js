import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../src/styles/Styles.scss";
import Form from "./pages/forms/Form";
import Header from "./pages/header/Header";
import SingleTask from "./pages/tasks/SingleTask";
import { useUserContext } from "./context/UserContext";
import Login from "./pages/auth/Login";
import { useState } from "react";

function App() {
  const { windowClose } = useUserContext();
  const [auth, setAuth] = useState(true);
  console.log({setAuth})

  return (
    <div className="MainPage">
     {auth?<Login /> :
      <div className="display" style={{widows: "100%", height: "100vh"}}
        onClick={windowClose}>
        <div className="headesection">
          <Header />
        </div>
        <div className="forsection">
          <Form />
        </div>
        <div className="tasksection">
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </div>
        <div className="footer">
          <p>&copy;2024GtechDeveloper</p>
          <div className="contacts">
            <FaEnvelope size={15} color="orangered" />
            <FaWhatsapp size={15} color="green" />
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;
