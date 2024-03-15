import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../src/styles/Styles.scss";
import Form from "./pages/forms/Form";
import Header from "./pages/header/Header";
import SingleTask from "./pages/tasks/SingleTask";

function App() {

  return (
    <div className="MainPage">
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
    </div>
  );
}

export default App;
