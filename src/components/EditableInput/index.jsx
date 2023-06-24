import PropTypes from "prop-types";
import { Component } from "react";
import "./index.css";

{
    /* ✔ ❌ */
}
export default class EditableInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            editing: false,
        };
    }

    componentDidMount() {
        window.addEventListener("click", (e) => {
            if (e.target.id !== this.props.id) {
                this.setState({
                    editing: false,
                });
            }
        });
    }

    render() {
        if (this.state.editing) {
            return (
                <input
                    onChange={(e) =>
                        this.setState({
                            value: e.target.value,
                        })
                    }
                    type={this.props.type}
                    className="EditableInput"
                    id={this.props.id}
                    value={this.state.value}
                />
            );
        } else {
            return (
                <div
                    onClick={() => {
                        this.setState({
                            editing: true,
                        });
                    }}
                    className="EditableInput"
                    id={this.props.id}
                >
                    {this.state.value}
                </div>
            );
        }
    }
}

EditableInput.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
