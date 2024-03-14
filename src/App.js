import "../src/styles/Styles.scss";
import Form from "./pages/forms/Form";
import Header from "./pages/header/Header";

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

      </div>
    </div>
  );
}

export default App;
