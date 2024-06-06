import './App.css';
import Comp2 from "./components/Comp2";
import {useState} from "react";
import Comp1 from "./components/Comp1";

function App() {
  const [photos, setPhotos] = useState ([]);
const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const addPhoto = (url) => {
    setPhotos([...photos, url]);
  }

  const nextPhoto = () => {
      setCurrentPhotoIndex((currentPhotoIndex+1) % photos.length);
  }
  const prevPhoto = () => {
      setCurrentPhotoIndex((currentPhotoIndex-1) % photos.length);
  }
  return (
    <div className="App">
      <Comp1
        photos={photos}
        currentPhotoIndex={currentPhotoIndex}
        nextPhoto={nextPhoto}
        prevPhoto={prevPhoto}
        setCurrentPhotoIndex={setCurrentPhotoIndex}
        />
      <Comp2 addPhoto={addPhoto} />
    </div>
  );
}

export default App;
