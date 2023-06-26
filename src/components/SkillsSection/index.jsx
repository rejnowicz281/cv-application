import PropTypes from "prop-types";
import { useState } from "react";
import ToggableForm from "../ToggableForm";

export default function SkillsSection(props) {
    const [newEntry, setNewEntry] = useState("");

    function onSubmit() {
        props.addSkill(newEntry);
        setNewEntry("");
    }

    return (
        <section className="SkillsSection">
            <h1>Skills</h1>
            <ul>
                {props.skills.map((skill, idx) => {
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
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
