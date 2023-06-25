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

        window.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
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
                    onChange={(e) => this.props.onChange(e.target.value)}
                    type={this.props.type}
                    className="EditableInput"
                    id={this.props.id}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
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
                    {this.props.value == "" ? this.props.placeholder : this.props.value}
                </div>
            );
        }
    }
}

EditableInput.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
