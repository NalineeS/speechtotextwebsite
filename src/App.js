import "./App.css";
import useClipboard from "react-use-clipboard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

function App() {
  const [textCopied, settextCopied] = useState();
  const [isCopied, setCopied] = useClipboard(textCopied);
  const stopListening = () => SpeechRecognition.stopListening();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          This is a React hook that converts speech from the microphone to text
          and make it available to your React componant.
        </p>
        <div className="main-content" onClick={() => settextCopied(transcript)}>
          <p>{transcript}</p>
        </div>
        <div className="btn-style">
          <button onClick={setCopied} className="btn btn-success">
            Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          {/* <button onClick={setCopied} className="btn btn-success ms-5">Copy To Clipboard</button> */}
          <button onClick={startListening} className="btn btn-danger">
            Start Listening
          </button>
          <button onClick={stopListening} className="btn btn-warning ">
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
