import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import EducationalExperienceSection from "./EducationalExperienceSection";
import GeneralInfoSection from "./GeneralInfoSection";
import PracticalExperienceSection from "./PracticalExperienceSection";
import SkillsSection from "./SkillsSection";

import "./index.css";

export default function Cv({ onSave, listLength }) {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [generalInfo, setGeneralInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const [educationalExperience, setEducationalExperience] = useState([]);
    const [practicalExperience, setPracticalExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const cvInfo = location.state && location.state.cvInfo;
        if (cvInfo) {
            setGeneralInfo(cvInfo.generalInfo);
            setEducationalExperience(cvInfo.educationalExperience);
            setPracticalExperience(cvInfo.practicalExperience);
            setSkills(cvInfo.skills);
        }
    }, [location]);

    function handleSave() {
        if (id) {
            // edit
            onSave(id, { generalInfo, practicalExperience, educationalExperience, skills });
        } else {
            // new
            onSave({ generalInfo, practicalExperience, educationalExperience, skills });
        }
        navigate("/cv-application/list");
    }

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
                <div className="d-flex flex-column gap-3">
                    <Link
                        className="btn btn-info p-2"
                        to="/cv-application/list"
                        state={
                            id == null && {
                                savedCv: { generalInfo, practicalExperience, educationalExperience, skills },
                            }
                        }
                    >
                        Show Cv List ({listLength})
                    </Link>
                    <button onClick={handleSave} className="btn btn-success p-3">
                        Save
                    </button>
                </div>
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
    onSave: PropTypes.func.isRequired,
    listLength: PropTypes.number.isRequired,
};
