import { Link } from "react-router-dom";
import { identifiedCvPropType } from "../../propTypes/cvPropType";

export default function CvListLink({ cv }) {
    return (
        <Link
            to={`/cv-application/edit/${cv.id}`}
            state={{
                cvInfo: {
                    generalInfo: cv.generalInfo,
                    practicalExperience: cv.practicalExperience,
                    educationalExperience: cv.educationalExperience,
                    skills: cv.skills,
                },
            }}
            className="CvListLink list-group-item"
        >
            {cv.generalInfo.firstName && cv.generalInfo.lastName ? (
                <span>
                    {cv.generalInfo.firstName}, {cv.generalInfo.lastName}
                </span>
            ) : (
                <b>~{cv.id}~</b>
            )}
        </Link>
    );
}

CvListLink.propTypes = {
    cv: identifiedCvPropType.isRequired,
};
