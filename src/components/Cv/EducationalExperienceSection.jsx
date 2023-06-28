import PropTypes from "prop-types";
import { useState } from "react";
import { educationalExperiencePropType } from "../../propTypes/cvPropType";
import ToggableForm from "./ToggableForm";

export default function EducationalExperienceSection({ addEducationalExperience, educationalExperience }) {
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
        addEducationalExperience(newEntry);
        setNewEntry({ schoolName: "", titleOfStudy: "", dateOfStudy: "" });
    }

    return (
        <section className="EducationalExperienceSection">
            <h1>Educational Experience</h1>
            <ul>
                {educationalExperience.map((exp, idx) => {
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
    educationalExperience: educationalExperiencePropType.isRequired,
};
