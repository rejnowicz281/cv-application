import PropTypes from "prop-types";
import { educationalExperiencePropType, practicalExperiencePropType, skillsPropType } from "../../propTypes/cvPropType";
import EducationalExperienceSection from "./EducationalExperienceSection";
import PracticalExperienceSection from "./PracticalExperienceSection";
import SkillsSection from "./SkillsSection";

export default function CvMain({
    educationalExperience,
    addEducationalExperience,
    practicalExperience,
    addPracticalExperience,
    skills,
    addSkill,
}) {
    return (
        <main className="CvMain bg-light d-flex flex-column p-5">
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
    );
}

CvMain.propTypes = {
    educationalExperience: educationalExperiencePropType,
    practicalExperience: practicalExperiencePropType,
    skills: skillsPropType,
    addPracticalExperience: PropTypes.func.isRequired,
    addEducationalExperience: PropTypes.func.isRequired,
    addSkill: PropTypes.func.isRequired,
};
