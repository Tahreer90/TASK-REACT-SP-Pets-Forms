import { useState } from "react";
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetCreateModal from "./Components/PetCreateModal";
import PetsList from "./Components/PetsList";
import petStore from "./petStore";

function App() {
  const pets = petStore.pets;
  const [isShown, setIsShown] = useState(false);
  const [petDate, setPetDate] = useState({
    id: "",
    name: "",
    type: "",
    image: "",
  });

  const handleShow = () => {
    setIsShown(true);
  };

  const handleClose = () => setIsShown(false);

  return (
    <div className="App">
      <PetsList pets={pets} handleShow={handleShow} handleClose={handleClose} />
      <PetCreateModal />
    </div>
  );
}

export default App;
