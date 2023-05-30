import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DummyData from "./components/DummyData";
import TextToSpeech from "./components/TextToSpeech";
import TextToSpeechTwo from "./components/TextToSpeechTwo";

function App() {
  return (
    <>
      <div className="custom-position">
        <TextToSpeech />
      </div>
      <div className="custom-position2">
      <TextToSpeechTwo/>
      </div>
      <DummyData />
      <DummyData />
      <DummyData />
    </>
  );
}

export default App;
