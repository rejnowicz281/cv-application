import { Component } from "react";
import EducationalExperienceSection from "../EducationalExperienceSection";
import GeneralInfoSection from "../GeneralInfoSection";

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
        this.addEducationalExperience = this.addEducationalExperience.bind(this);
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

    addEducationalExperience(educationalExperience) {
        this.setState({
            educationalExperience: [...this.state.educationalExperience, educationalExperience],
        });
    }

    render() {
        return (
            <div className="Cv">
                <GeneralInfoSection
                    generalInfo={this.state.generalInfo}
                    setFirstName={this.setFirstName}
                    setLastName={this.setLastName}
                    setEmail={this.setEmail}
                    setPhone={this.setPhone}
                />
                <hr />
                <EducationalExperienceSection
                    educationalExperience={this.state.educationalExperience}
                    onSubmit={this.addEducationalExperience}
                />
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
