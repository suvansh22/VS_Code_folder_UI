import "./styles.css";
import { useState } from "react";
import Folder from "./components/Folder";
import { explorer } from "./data/folderData";

export default function App() {
  const [fileName, setFileName] = useState("");
  return (
    <div className="App">
      <div className="container">
        <Folder data={explorer} setFileName={setFileName} />
      </div>
      <div className="fileContainer">{fileName}</div>
    </div>
  );
}
