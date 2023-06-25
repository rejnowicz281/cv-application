import PropTypes from "prop-types";
import { Component } from "react";
{
    /* School name, title of study, date of study */
}
export default class EducationalExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
            newEntry: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
        };
    }

    setSchoolName(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                schoolName: value,
            },
        });
    }

    setTitleOfStudy(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                titleOfStudy: value,
            },
        });
    }

    setDateOfStudy(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                dateOfStudy: value,
            },
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.newEntry);
        this.setState({ adding: false, newEntry: { schoolName: "", titleOfStudy: "", dateOfStudy: "" } });
    }

    render() {
        return (
            <section className="EducationalExperienceSection">
                <h1>Educational experience</h1>
                <ul>
                    {this.props.educationalExperience.map((exp, idx) => {
                        return (
                            <li key={idx}>
                                {exp.schoolName} - {exp.titleOfStudy} - {exp.dateOfStudy}
                            </li>
                        );
                    })}
                </ul>
                {this.state.adding ? (
                    <form onSubmit={(e) => this.onSubmit(e)} className="d-flex gap-1">
                        <input
                            onChange={(e) => this.setSchoolName(e.target.value)}
                            type="text"
                            value={this.state.newEntry.schoolName}
                            placeholder="School name"
                            required
                        />
                        <input
                            onChange={(e) => this.setTitleOfStudy(e.target.value)}
                            type="text"
                            value={this.state.newEntry.titleOfStudy}
                            placeholder="Title of study"
                            required
                        />
                        <input
                            onChange={(e) => this.setDateOfStudy(e.target.value)}
                            type="date"
                            value={this.state.newEntry.dateOfStudy}
                            placeholder="Date of study"
                            required
                        />
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={() => this.setState({ adding: false })}
                            className="btn btn-danger"
                        >
                            Cancel
                        </button>
                    </form>
                ) : (
                    <button onClick={() => this.setState({ adding: true })} className="btn btn-primary mt-3">
                        Add
                    </button>
                )}
            </section>
        );
    }
}

EducationalExperienceSection.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    educationalExperience: PropTypes.arrayOf(
        PropTypes.shape({
            schoolName: PropTypes.string.isRequired,
            titleOfStudy: PropTypes.string.isRequired,
            dateOfStudy: PropTypes.string.isRequired,
        })
    ),
};
