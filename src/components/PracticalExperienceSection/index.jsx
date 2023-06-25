import PropTypes from "prop-types";
import { Component } from "react";
import ToggableForm from "../ToggableForm";

{
    /* Company name, position title, main tasks, date (from-to) of working */
}
export default class PracticalExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            newEntry: { companyName: "", positionTitle: "", mainTasks: "", dateFrom: "", dateTo: "" },
        });
    }

    render() {
        return (
            <section className="PracticalExperienceSection">
                <h1>Practical Experience</h1>
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
                <ToggableForm classList="d-flex align-items-end gap-4" onSubmit={this.onSubmit}>
                    <div className="d-flex gap-1">
                        <div className="d-flex flex-column">
                            Company Name
                            <input
                                type="text"
                                value={this.state.newEntry.companyName}
                                onChange={(e) => this.setCompanyName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column">
                            Position Title
                            <input
                                type="text"
                                value={this.state.newEntry.positionTitle}
                                onChange={(e) => this.setPositionTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column">
                            Main Tasks
                            <input
                                type="text"
                                value={this.state.newEntry.mainTasks}
                                onChange={(e) => this.setMainTasks(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column">
                            Date From
                            <input
                                type="date"
                                value={this.state.newEntry.dateFrom}
                                onChange={(e) => this.setDateFrom(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column">
                            Date To
                            <input
                                type="date"
                                value={this.state.newEntry.dateTo}
                                onChange={(e) => this.setDateTo(e.target.value)}
                            />
                        </div>
                    </div>
                </ToggableForm>
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
