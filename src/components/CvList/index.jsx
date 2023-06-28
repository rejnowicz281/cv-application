import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { identifiedCvPropType } from "../../propTypes/cvPropType";
import CvListHeader from "./CvListHeader";
import CvListMain from "./CvListMain";
import "./index.css";

export default function CvList({ list }) {
    const location = useLocation();
    const savedCv = location.state && location.state.savedCv;

    return (
        <div className="CvList">
            <CvListHeader savedCv={savedCv} />
            <CvListMain list={list} />
        </div>
    );
}

CvList.propTypes = {
    list: PropTypes.arrayOf(identifiedCvPropType).isRequired,
};
