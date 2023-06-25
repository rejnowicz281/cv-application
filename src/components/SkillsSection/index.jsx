import PropTypes from "prop-types";
import { Component } from "react";
import ToggableForm from "../ToggableForm";

export default class SkillsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newEntry: "",
        };

        this.setNewEntry = this.setNewEntry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setNewEntry(value) {
        this.setState({
            newEntry: value,
        });
    }

    onSubmit() {
        this.props.onSubmit(this.state.newEntry);
        this.setState({
            newEntry: "",
        });
    }

    render() {
        return (
            <section className="SkillsSection">
                <h1>Skills</h1>
                <ul>
                    {this.props.skills.map((skill, idx) => {
                        return <li key={idx}>{skill}</li>;
                    })}
                </ul>
                <ToggableForm classList="d-flex align-items-end gap-4" onSubmit={this.onSubmit}>
                    <input type="text" onChange={(e) => this.setNewEntry(e.target.value)} value={this.state.newEntry} />
                </ToggableForm>
            </section>
        );
    }
}

SkillsSection.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
