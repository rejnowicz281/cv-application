import { useState } from "react";
import Cv from "../Cv";

export default function App() {
    const [cvList, setCvList] = useState([]);

    function saveCV(cv) {
        setCvList([...cvList, cv]);
    }

    return (
        <div className="App">
            <Cv saveCV={saveCV} />
        </div>
    );
}
