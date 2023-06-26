import PropTypes from "prop-types";
import EditableInput from "../EditableInput";
import "./index.css";

export default function GeneralInfoSection(props) {
    return (
        <section className="GeneralInfoSection">
            <EditableInput
                onChange={props.setFirstName}
                id="first-name"
                type="text"
                value={props.generalInfo.firstName}
                placeholder="First Name"
            />
            <EditableInput
                onChange={props.setLastName}
                id="last-name"
                type="text"
                value={props.generalInfo.lastName}
                placeholder="Last Name"
            />
            <p className="fs-4 mt-5 pb-1 border-bottom">Contact</p>
            <div className="contact">
                <EditableInput
                    onChange={props.setEmail}
                    id="email"
                    type="email"
                    value={props.generalInfo.email}
                    placeholder="Email"
                />
                <EditableInput
                    onChange={props.setPhone}
                    id="phone"
                    type="tel"
                    value={props.generalInfo.phone}
                    placeholder="Phone"
                />
            </div>
        </section>
    );
}

GeneralInfoSection.propTypes = {
    generalInfo: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }),
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
};
