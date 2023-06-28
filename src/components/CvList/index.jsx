import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { identifiedCvPropType } from "../../propTypes/cvPropType";
import CvListHeader from "./CvListHeader";
import CvListMain from "./CvListMain";
import "./index.css";

export default function CvList({ list }) {
    const location = useLocation();
    const fallbackCv = location.state && location.state.fallbackCv;

    return (
        <div className="CvList">
            <CvListHeader fallbackCv={fallbackCv} />
            <CvListMain list={list} />
        </div>
    );
}

CvList.propTypes = {
    list: PropTypes.arrayOf(identifiedCvPropType).isRequired,
};
