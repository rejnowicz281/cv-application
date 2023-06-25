import PropTypes from "prop-types";
import FormSection from "../FormSection";
{
    /* Company name, position title, main tasks, date (from-to) of working */
}
export default class PracticalExperienceSection extends FormSection {
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
            newEntry: { companyName: "", positionTitle: "", mainTasks: "", dateFrom: "", dateTo: "" },
        };

        this.setCompanyName = this.setCompanyName.bind(this);
        this.setPositionTitle = this.setPositionTitle.bind(this);
        this.setMainTasks = this.setMainTasks.bind(this);
        this.setDateFrom = this.setDateFrom.bind(this);
        this.setDateTo = this.setDateTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setCompanyName(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                companyName: value,
            },
        });
    }

    setPositionTitle(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                positionTitle: value,
            },
        });
    }

    setMainTasks(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                mainTasks: value,
            },
        });
    }

    setDateFrom(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                dateFrom: value,
            },
        });
    }

    setDateTo(value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                dateTo: value,
            },
        });
    }

    onSubmit() {
        this.props.onSubmit(this.state.newEntry);
        this.setState({
            adding: false,
            newEntry: { companyName: "", positionTitle: "", mainTasks: "", dateFrom: "", dateTo: "" },
        });
    }

    render() {
        return (
            <section className="PracticalExperienceSection">
                {this.header("Practical Experience")}
                <ul>
                    {this.props.practicalExperience.map((exp, idx) => {
                        return (
                            <li key={idx}>
                                {exp.companyName} - {exp.positionTitle} - {exp.mainTasks} - {exp.dateFrom} -{" "}
                                {exp.dateTo}
                            </li>
                        );
                    })}
                </ul>
                {this.form([
                    {
                        type: "text",
                        placeholder: "Company name",
                        value: this.state.newEntry.companyName,
                        onChange: (value) => this.setCompanyName(value),
                    },
                    {
                        type: "text",
                        placeholder: "Position title",
                        value: this.state.newEntry.positionTitle,
                        onChange: (value) => this.setPositionTitle(value),
                    },
                    {
                        type: "text",
                        placeholder: "Main tasks",
                        value: this.state.newEntry.mainTasks,
                        onChange: (value) => this.setMainTasks(value),
                    },
                    {
                        type: "date",
                        placeholder: "Date from",
                        value: this.state.newEntry.dateFrom,
                        onChange: (value) => this.setDateFrom(value),
                    },
                    {
                        type: "date",
                        placeholder: "Date to",
                        value: this.state.newEntry.dateTo,
                        onChange: (value) => this.setDateTo(value),
                    },
                ])}
            </section>
        );
    }
}

PracticalExperienceSection.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    practicalExperience: PropTypes.arrayOf(
        PropTypes.shape({
            companyName: PropTypes.string.isRequired,
            positionTitle: PropTypes.string.isRequired,
            mainTasks: PropTypes.string.isRequired,
            dateFrom: PropTypes.string.isRequired,
            dateTo: PropTypes.string.isRequired,
        })
    ),
};
