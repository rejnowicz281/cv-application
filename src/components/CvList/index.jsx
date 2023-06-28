import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function CvList({ list }) {
    const location = useLocation();
    const savedCv = location.state && location.state.savedCv;

    return (
        <div className="CvList">
            <div className="text-center">
                <h1>Cv List</h1>
                <Link className="btn btn-primary me-2" to="/cv-application/new">
                    Create New Cv
                </Link>
                {savedCv && (
                    <Link className="btn btn-primary ms-2" to="/cv-application/new" state={{ cvInfo: savedCv }}>
                        Back to ({savedCv.generalInfo.firstName}, {savedCv.generalInfo.lastName})
                    </Link>
                )}
                <div className="list-group cv-list-container mt-3">
                    {list.map((cv) => {
                        return (
                            <Link
                                key={cv.id}
                                to={`/cv-application/edit/${cv.id}`}
                                state={{
                                    cvInfo: {
                                        generalInfo: cv.generalInfo,
                                        practicalExperience: cv.practicalExperience,
                                        educationalExperience: cv.educationalExperience,
                                        skills: cv.skills,
                                    },
                                }}
                                className="list-group-item"
                            >
                                {cv.generalInfo.firstName}, {cv.generalInfo.lastName}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

CvList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            generalInfo: PropTypes.shape({
                firstName: PropTypes.string.isRequired,
                lastName: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                phone: PropTypes.string.isRequired,
            }).isRequired,
            educationalExperience: PropTypes.arrayOf(
                PropTypes.shape({
                    school: PropTypes.string.isRequired,
                    titleOfStudy: PropTypes.string.isRequired,
                    dateOfStudy: PropTypes.string.isRequired,
                })
            ).isRequired,
            practicalExperience: PropTypes.arrayOf(
                PropTypes.shape({
                    company: PropTypes.string.isRequired,
                    position: PropTypes.string.isRequired,
                    mainTasks: PropTypes.string.isRequired,
                    date: PropTypes.string.isRequired,
                })
            ).isRequired,
            skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        })
    ).isRequired,
};
