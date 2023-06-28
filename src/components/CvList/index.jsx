import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function CvList({ list }) {
    const location = useLocation();
    const savedCv = location.state && location.state.savedCv;

    return (
        <div className="CvList">
            <div className="bg-dark text-white pb-5 pt-3">
                <h1 className="text-center">CV List</h1>
                <div className="d-flex flex-column align-items-center gap-3">
                    <Link className="btn btn-success me-2 fs-3" to="/cv-application/new">
                        Create New Cv
                    </Link>
                    {savedCv && (
                        <Link className="btn btn-info ms-2" to="/cv-application/new" state={{ cvInfo: savedCv }}>
                            Back to
                            {savedCv.generalInfo.firstName && savedCv.generalInfo.lastName
                                ? ` (${savedCv.generalInfo.firstName}, ${savedCv.generalInfo.lastName})`
                                : " CV"}
                        </Link>
                    )}
                </div>
            </div>
            <div className="list-group text-center cv-list-container fs-4 mt-3">
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
