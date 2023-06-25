import PropTypes from "prop-types";
import { Component } from "react";
import ToggableForm from "../ToggableForm";

{
    /* School name, title of study, date of study */
}
export default class EducationalExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newEntry: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
        };

        this.setSchoolName = this.setSchoolName.bind(this);
        this.setTitleOfStudy = this.setTitleOfStudy.bind(this);
        this.setDateOfStudy = this.setDateOfStudy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit() {
        this.props.onSubmit(this.state.newEntry);
        this.setState({ adding: false, newEntry: { schoolName: "", titleOfStudy: "", dateOfStudy: "" } });
    }

    render() {
        return (
            <section className="EducationalExperienceSection">
                <h1>Educational Experience</h1>
                <ul>
                    {this.props.educationalExperience.map((exp, idx) => {
                        return (
                            <li key={idx}>
                                {exp.schoolName} - {exp.titleOfStudy} - {exp.dateOfStudy}
                            </li>
                        );
                    })}
                </ul>
                <ToggableForm classList="d-flex align-items-end gap-4" onSubmit={this.onSubmit}>
                    <div className="d-flex gap-1">
                        <div className="d-flex flex-column">
                            School Name
                            <input
                                type="text"
                                value={this.state.newEntry.schoolName}
                                onChange={(e) => this.setSchoolName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column">
                            Title of Study
                            <input
                                type="text"
                                value={this.state.newEntry.titleOfStudy}
                                onChange={(e) => this.setTitleOfStudy(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column">
                            Date Of Study
                            <input
                                type="date"
                                value={this.state.newEntry.dateOfStudy}
                                onChange={(e) => this.setDateOfStudy(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </ToggableForm>
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
