import PropTypes from "prop-types";
import { Component } from "react";

export default class ToggableForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
        };
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ adding: false });
        this.props.onSubmit();
    }

    render() {
        if (this.state.adding) {
            return (
                <form onSubmit={(e) => this.onSubmit(e)} className={this.props.classList ? this.props.classList : ""}>
                    {this.props.children}
                    <div>
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={() => this.setState({ adding: false })}
                            className="btn btn-danger ms-2"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            );
        } else {
            return (
                <button onClick={() => this.setState({ adding: true })} className="btn btn-primary">
                    Add
                </button>
            );
        }
    }
}

ToggableForm.propTypes = {
    classList: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
