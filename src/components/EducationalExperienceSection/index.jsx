import PropTypes from "prop-types";
import FormSection from "../FormSection";

{
    /* School name, title of study, date of study */
}
export default class EducationalExperienceSection extends FormSection {
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

    onSubmit() {
        this.props.onSubmit(this.state.newEntry);
        this.setState({ adding: false, newEntry: { schoolName: "", titleOfStudy: "", dateOfStudy: "" } });
    }

    render() {
        return (
            <section className="EducationalExperienceSection">
                {this.header("Educational Experience")}
                <ul>
                    {this.props.educationalExperience.map((exp, idx) => {
                        return (
                            <li key={idx}>
                                {exp.schoolName} - {exp.titleOfStudy} - {exp.dateOfStudy}
                            </li>
                        );
                    })}
                </ul>
                {this.form([
                    {
                        type: "text",
                        placeholder: "School name",
                        value: this.state.newEntry.schoolName,
                        onChange: (value) => this.setSchoolName(value),
                    },
                    {
                        type: "text",
                        placeholder: "Title of study",
                        value: this.state.newEntry.titleOfStudy,
                        onChange: (value) => this.setTitleOfStudy(value),
                    },
                    {
                        type: "date",
                        placeholder: "Date of study",
                        value: this.state.newEntry.dateOfStudy,
                        onChange: (value) => this.setDateOfStudy(value),
                    },
                ])}
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
