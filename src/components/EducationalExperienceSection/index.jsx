import PropTypes from "prop-types";
import { useState } from "react";
import ToggableForm from "../ToggableForm";

{
    /* School name, title of study, date of study */
}
export default function EducationalExperienceSection(props) {
    const [newEntry, setNewEntry] = useState({ schoolName: "", titleOfStudy: "", dateOfStudy: "" });

    function setSchoolName(value) {
        setNewEntry({
            ...newEntry,
            schoolName: value,
        });
    }

    function setTitleOfStudy(value) {
        setNewEntry({
            ...newEntry,
            titleOfStudy: value,
        });
    }

    function setDateOfStudy(value) {
        setNewEntry({
            ...newEntry,
            dateOfStudy: value,
        });
    }

    function onSubmit() {
        props.addEducationalExperience(newEntry);
        setNewEntry({ schoolName: "", titleOfStudy: "", dateOfStudy: "" });
    }

    return (
        <section className="EducationalExperienceSection">
            <h1>Educational Experience</h1>
            <ul>
                {props.educationalExperience.map((exp, idx) => {
                    return (
                        <li key={idx}>
                            {exp.schoolName} - {exp.titleOfStudy} - {exp.dateOfStudy}
                        </li>
                    );
                })}
            </ul>
            <ToggableForm classList="d-flex align-items-end gap-4" onSubmit={onSubmit}>
                <div className="d-flex gap-1">
                    <div className="d-flex flex-column">
                        School Name
                        <input
                            type="text"
                            value={newEntry.schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex flex-column">
                        Title of Study
                        <input
                            type="text"
                            value={newEntry.titleOfStudy}
                            onChange={(e) => setTitleOfStudy(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex flex-column">
                        Date Of Study
                        <input
                            type="date"
                            value={newEntry.dateOfStudy}
                            onChange={(e) => setDateOfStudy(e.target.value)}
                            required
                        />
                    </div>
                </div>
            </ToggableForm>
        </section>
    );
}

EducationalExperienceSection.propTypes = {
    addEducationalExperience: PropTypes.func.isRequired,
    educationalExperience: PropTypes.arrayOf(
        PropTypes.shape({
            schoolName: PropTypes.string.isRequired,
            titleOfStudy: PropTypes.string.isRequired,
            dateOfStudy: PropTypes.string.isRequired,
        })
    ),
};
