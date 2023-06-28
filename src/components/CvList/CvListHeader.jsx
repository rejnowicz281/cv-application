import { Link } from "react-router-dom";
import { cvPropType } from "../../propTypes/cvPropType";

export default function CvListHeader({ savedCv }) {
    return (
        <div className="CvListHeader bg-dark text-white pb-5 pt-3">
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
    );
}

CvListHeader.propTypes = {
    savedCv: cvPropType,
};
