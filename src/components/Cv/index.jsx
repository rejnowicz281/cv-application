import { Component } from "react";
import EditableInput from "../EditableInput";

export default class Cv extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalInfo: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            },
            educationalExperience: [],
            practicalExperience: [],
        };

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhone = this.setPhone.bind(this);
    }

    setFirstName(value) {
        this.setState({
            generalInfo: {
                ...this.state.generalInfo,
                firstName: value,
            },
        });
    }

    setLastName(value) {
        this.setState({
            generalInfo: {
                ...this.state.generalInfo,
                lastName: value,
            },
        });
    }

    setEmail(value) {
        this.setState({
            generalInfo: {
                ...this.state.generalInfo,
                email: value,
            },
        });
    }

    setPhone(value) {
        this.setState({
            generalInfo: {
                ...this.state.generalInfo,
                phone: value,
            },
        });
    }

    render() {
        return (
            <div className="Cv">
                <section className="general-info">
                    <EditableInput
                        onChange={this.setFirstName}
                        id="first-name"
                        type="text"
                        value={this.state.generalInfo.firstName}
                        placeholder="First Name"
                    />
                    <EditableInput
                        onChange={this.setLastName}
                        id="last-name"
                        type="text"
                        value={this.state.generalInfo.lastName}
                        placeholder="Last Name"
                    />

                    <EditableInput
                        onChange={this.setEmail}
                        id="email"
                        type="email"
                        value={this.state.generalInfo.email}
                        placeholder="Email"
                    />
                    <EditableInput
                        onChange={this.setPhone}
                        id="phone"
                        type="tel"
                        value={this.state.generalInfo.phone}
                        placeholder="Phone"
                    />
                </section>
                <hr />
                <section className="educational-experience">
                    <h1>Educational experience</h1>
                    <button className="btn btn-primary">Add</button>
                    {/* School name, title of study, date of study */}
                </section>
                <hr />
                <section className="practical-experience">
                    <h1>Practical experience</h1>
                    <button className="btn btn-primary">Add</button>
                    {/* Company name, position title, main tasks, date (from-to) of working */}
                </section>
            </div>
        );
    }
}
