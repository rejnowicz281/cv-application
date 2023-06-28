import PropTypes from "prop-types";
import { identifiedCvPropType } from "../../propTypes/cvPropType";
import CvListLink from "./CvListLink";

export default function CvListMain({ list }) {
    return (
        <div className="CvListMain list-group text-center fs-4 mt-3">
            {list.map((cv) => {
                return <CvListLink key={cv.id} cv={cv} />;
            })}
        </div>
    );
}

CvListMain.propTypes = {
    list: PropTypes.arrayOf(identifiedCvPropType).isRequired,
};
