import PropTypes from "prop-types";
import { useState } from "react";
import EducationalExperienceSection from "../EducationalExperienceSection";
import GeneralInfoSection from "../GeneralInfoSection";
import PracticalExperienceSection from "../PracticalExperienceSection";
import SkillsSection from "../SkillsSection";

import "./index.css";

export default function Cv(props) {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const [educationalExperience, setEducationalExperience] = useState([]);
    const [practicalExperience, setPracticalExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    function setFirstName(value) {
        setGeneralInfo({
            ...generalInfo,
            firstName: value,
        });
    }

    function setLastName(value) {
        setGeneralInfo({
            ...generalInfo,
            lastName: value,
        });
    }

    function setEmail(value) {
        setGeneralInfo({
            ...generalInfo,
            email: value,
        });
    }

    function setPhone(value) {
        setGeneralInfo({
            ...generalInfo,
            phone: value,
        });
    }

    function addEducationalExperience(experience) {
        setEducationalExperience([...educationalExperience, experience]);
    }

    function addPracticalExperience(experience) {
        setPracticalExperience([...practicalExperience, experience]);
    }

    function addSkill(skill) {
        setSkills([...skills, skill]);
    }

    return (
        <div className="Cv vh-100 d-flex">
            <aside className="bg-dark text-white p-5 d-flex flex-column justify-content-between">
                <GeneralInfoSection
                    generalInfo={generalInfo}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                />
                <button onClick={() => props.saveCV(this.state)} className="btn btn-success p-3">
                    Save
                </button>
            </aside>
            <main className="bg-light d-flex flex-column p-5">
                <div className="flex-fill">
                    <EducationalExperienceSection
                        educationalExperience={educationalExperience}
                        addEducationalExperience={addEducationalExperience}
                    />
                </div>
                <div className="flex-fill">
                    <PracticalExperienceSection
                        practicalExperience={practicalExperience}
                        addPracticalExperience={addPracticalExperience}
                    />
                </div>
                <div className="flex-fill">
                    <SkillsSection skills={skills} addSkill={addSkill} />
                </div>
            </main>
        </div>
    );
}

Cv.propTypes = {
    saveCV: PropTypes.func.isRequired,
};
