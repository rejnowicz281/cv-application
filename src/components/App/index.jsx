import { Component } from "react";
import Cv from "../Cv";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Cv />
            </div>
        );
    }
}
