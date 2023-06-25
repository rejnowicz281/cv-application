import { Component } from "react";

export default class FormSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
        };
    }

    header(text) {
        return <h1>{text}</h1>;
    }

    form(inputs) {
        if (this.state.adding) {
            return (
                <form onSubmit={(e) => this.onSubmit(e)} className="d-flex gap-1">
                    {inputs.map((input, idx) => {
                        return (
                            <input
                                key={idx}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={input.value}
                                onChange={(e) => input.onChange(e.target.value)}
                                required
                            />
                        );
                    })}
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                    <button type="button" onClick={() => this.setState({ adding: false })} className="btn btn-danger">
                        Cancel
                    </button>
                </form>
            );
        } else {
            return (
                <button onClick={() => this.setState({ adding: true })} className="btn btn-primary mt-3">
                    Add
                </button>
            );
        }
    }
}
