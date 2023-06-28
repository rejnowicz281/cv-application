import PropTypes from "prop-types";
import { useState } from "react";
import { practicalExperiencePropType } from "../../propTypes/cvPropType";
import ToggableForm from "../ToggableForm";
{
    /* Company name, position title, main tasks, date (from-to) of working */
}
export default function PracticalExperienceSection({ addPracticalExperience, practicalExperience }) {
    const [newEntry, setNewEntry] = useState({
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateFrom: "",
        dateTo: "",
    });

    // Turn these functions into one?
    function setCompanyName(value) {
        setNewEntry({
            ...newEntry,
            companyName: value,
        });
    }

    function setPositionTitle(value) {
        setNewEntry({
            ...newEntry,
            positionTitle: value,
        });
    }

    function setMainTasks(value) {
        setNewEntry({
            ...newEntry,
            mainTasks: value,
        });
    }

    function setDateFrom(value) {
        setNewEntry({
            ...newEntry,
            dateFrom: value,
        });
    }

    function setDateTo(value) {
        setNewEntry({
            ...newEntry,
            dateTo: value,
        });
    }

    function onSubmit() {
        addPracticalExperience(newEntry);
        setNewEntry({ companyName: "", positionTitle: "", mainTasks: "", dateFrom: "", dateTo: "" });
    }

    return (
        <section className="PracticalExperienceSection">
            <h1>Practical Experience</h1>
            <ul>
                {practicalExperience.map((exp, idx) => {
                    return (
                        <li key={idx}>
                            {exp.companyName} - {exp.positionTitle} - {exp.mainTasks} - {exp.dateFrom} - {exp.dateTo}
                        </li>
                    );
                })}
            </ul>
            <ToggableForm classList="d-flex align-items-end gap-4" onSubmit={onSubmit}>
                <div className="d-flex gap-1">
                    <div className="d-flex flex-column">
                        Company Name
                        <input
                            type="text"
                            value={newEntry.companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex flex-column">
                        Position Title
                        <input
                            type="text"
                            value={newEntry.positionTitle}
                            onChange={(e) => setPositionTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex flex-column">
                        Main Tasks
                        <input
                            type="text"
                            value={newEntry.mainTasks}
                            onChange={(e) => setMainTasks(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex flex-column">
                        Date From
                        <input
                            type="date"
                            value={newEntry.dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex flex-column">
                        Date To
                        <input type="date" value={newEntry.dateTo} onChange={(e) => setDateTo(e.target.value)} />
                    </div>
                </div>
            </ToggableForm>
        </section>
    );
}

PracticalExperienceSection.propTypes = {
    addPracticalExperience: PropTypes.func.isRequired,
    practicalExperience: practicalExperiencePropType.isRequired,
};
