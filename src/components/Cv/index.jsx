import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CvAside from "./CvAside";
import CvMain from "./CvMain";
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
            <CvAside
                generalInfo={generalInfo}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhone={setPhone}
                listLength={listLength}
                cvId={id}
                handleSave={handleSave}
                fallbackCv={{ generalInfo, practicalExperience, educationalExperience, skills }}
            />
            <CvMain
                educationalExperience={educationalExperience}
                addEducationalExperience={addEducationalExperience}
                practicalExperience={practicalExperience}
                addPracticalExperience={addPracticalExperience}
                skills={skills}
                addSkill={addSkill}
            />
        </div>
    );
}

Cv.propTypes = {
    onSave: PropTypes.func.isRequired,
    listLength: PropTypes.number.isRequired,
};
