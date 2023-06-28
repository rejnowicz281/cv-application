import PropTypes from "prop-types";

const generalInfoPropType = PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
});

const educationalExperiencePropType = PropTypes.arrayOf(
    PropTypes.shape({
        schoolName: PropTypes.string.isRequired,
        titleOfStudy: PropTypes.string.isRequired,
        dateOfStudy: PropTypes.string.isRequired,
    })
);

const practicalExperiencePropType = PropTypes.arrayOf(
    PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        positionTitle: PropTypes.string.isRequired,
        mainTasks: PropTypes.string.isRequired,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
    })
);

const skillsPropType = PropTypes.arrayOf(PropTypes.string.isRequired);

const cvPropType = PropTypes.shape({
    generalInfo: generalInfoPropType.isRequired,
    educationalExperience: educationalExperiencePropType.isRequired,
    practicalExperience: practicalExperiencePropType.isRequired,
    skills: skillsPropType.isRequired,
});

const identifiedCvPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    generalInfo: generalInfoPropType.isRequired,
    educationalExperience: educationalExperiencePropType.isRequired,
    practicalExperience: practicalExperiencePropType.isRequired,
    skills: skillsPropType.isRequired,
});

export {
    cvPropType,
    educationalExperiencePropType,
    generalInfoPropType,
    identifiedCvPropType,
    practicalExperiencePropType,
    skillsPropType,
};
