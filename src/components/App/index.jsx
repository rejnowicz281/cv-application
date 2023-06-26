import { useState } from "react";
import Cv from "../Cv";

export default function App() {
    const [cvList, setCvList] = useState([]);
    const [showingCvList, setShowingCvList] = useState(false);

    function saveCV(cv) {
        setCvList([...cvList, cv]);
    }

    return (
        <div className="App">
            {showingCvList ? null : (
                <Cv cvListLength={cvList.length} showCvList={() => setShowingCvList(true)} saveCV={saveCV} />
            )}
        </div>
    );
}
