import PropTypes from "prop-types";
import { Component } from "react";
import EditableInput from "../EditableInput";

export default class GeneralInfoSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="GeneralInfoSection">
                <EditableInput
                    onChange={this.props.setFirstName}
                    id="first-name"
                    type="text"
                    value={this.props.generalInfo.firstName}
                    placeholder="First Name"
                />
                <EditableInput
                    onChange={this.props.setLastName}
                    id="last-name"
                    type="text"
                    value={this.props.generalInfo.lastName}
                    placeholder="Last Name"
                />

                <EditableInput
                    onChange={this.props.setEmail}
                    id="email"
                    type="email"
                    value={this.props.generalInfo.email}
                    placeholder="Email"
                />
                <EditableInput
                    onChange={this.props.setPhone}
                    id="phone"
                    type="tel"
                    value={this.props.generalInfo.phone}
                    placeholder="Phone"
                />
            </section>
        );
    }
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
