import PropTypes from "prop-types";
import { generalInfoPropType } from "../../propTypes/cvPropType";
import EditableInput from "./EditableInput";
import "./index.css";
export default function GeneralInfoSection({ generalInfo, setFirstName, setLastName, setEmail, setPhone }) {
    return (
        <section className="GeneralInfoSection">
            <EditableInput
                onChange={setFirstName}
                id="first-name"
                type="text"
                value={generalInfo.firstName}
                placeholder="First Name"
            />
            <EditableInput
                onChange={setLastName}
                id="last-name"
                type="text"
                value={generalInfo.lastName}
                placeholder="Last Name"
            />
            <p className="fs-4 mt-5 pb-1 border-bottom">Contact</p>
            <div className="contact">
                <EditableInput
                    onChange={setEmail}
                    id="email"
                    type="email"
                    value={generalInfo.email}
                    placeholder="Email"
                />
                <EditableInput
                    onChange={setPhone}
                    id="phone"
                    type="tel"
                    value={generalInfo.phone}
                    placeholder="Phone"
                />
            </div>
        </section>
    );
}

GeneralInfoSection.propTypes = {
    generalInfo: generalInfoPropType.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
};
