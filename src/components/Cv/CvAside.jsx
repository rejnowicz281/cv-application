import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cvPropType, generalInfoPropType } from "../../propTypes/cvPropType";
import GeneralInfoSection from "./GeneralInfoSection";

export default function CvAside({
    generalInfo,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    listLength,
    handleSave,
    cvId,
    fallbackCv,
}) {
    return (
        <aside className="CvAside bg-dark text-white p-5 d-flex flex-column justify-content-between">
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
                        cvId == null && {
                            fallbackCv: fallbackCv,
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
    );
}

CvAside.propTypes = {
    generalInfo: generalInfoPropType,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
    listLength: PropTypes.number.isRequired,
    handleSave: PropTypes.func.isRequired,
    cvId: PropTypes.string,
    fallbackCv: cvPropType,
};
