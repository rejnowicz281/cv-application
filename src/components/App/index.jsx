import { Component } from "react";
import Cv from "../Cv";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCVList: false,
            cvList: [],
        };

        this.saveCV = this.saveCV.bind(this);
    }

    saveCV(cv) {
        this.setState({
            cvList: [...this.state.cvList, cv],
        });
    }

    render() {
        return (
            <div className="App">
                <Cv saveCV={this.saveCV} />
            </div>
        );
    }
}
