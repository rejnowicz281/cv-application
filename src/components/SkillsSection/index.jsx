import PropTypes from "prop-types";
import { useState } from "react";
import { skillsPropType } from "../../propTypes/cvPropType";
import ToggableForm from "../ToggableForm";

export default function SkillsSection({ addSkill, skills }) {
    const [newEntry, setNewEntry] = useState("");

    function onSubmit() {
        addSkill(newEntry);
        setNewEntry("");
    }

    return (
        <section className="SkillsSection">
            <h1>Skills</h1>
            <ul>
                {skills.map((skill, idx) => {
                    return <li key={idx}>{skill}</li>;
                })}
            </ul>
            <ToggableForm classList="d-flex align-items-end gap-4" onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setNewEntry(e.target.value)} value={newEntry} />
            </ToggableForm>
        </section>
    );
}

SkillsSection.propTypes = {
    addSkill: PropTypes.func.isRequired,
    skills: skillsPropType.isRequired,
};
