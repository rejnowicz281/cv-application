import { Component } from "react";
import EducationalExperienceSection from "../EducationalExperienceSection";
import GeneralInfoSection from "../GeneralInfoSection";
import PracticalExperienceSection from "../PracticalExperienceSection";
import SkillsSection from "../SkillsSection";

import "./index.css";

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
            skills: [],
        };

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.addEducationalExperience = this.addEducationalExperience.bind(this);
        this.addPracticalExperience = this.addPracticalExperience.bind(this);
        this.addSkill = this.addSkill.bind(this);
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

    addPracticalExperience(practicalExperience) {
        this.setState({
            practicalExperience: [...this.state.practicalExperience, practicalExperience],
        });
    }

    addSkill(skill) {
        this.setState({
            skills: [...this.state.skills, skill],
        });
    }

    render() {
        return (
            <div className="Cv vh-100 d-flex">
                <aside className="bg-dark text-white p-5">
                    <GeneralInfoSection
                        generalInfo={this.state.generalInfo}
                        setFirstName={this.setFirstName}
                        setLastName={this.setLastName}
                        setEmail={this.setEmail}
                        setPhone={this.setPhone}
                    />
                </aside>
                <main className="bg-light d-flex flex-column p-5">
                    <div className="flex-fill">
                        <EducationalExperienceSection
                            educationalExperience={this.state.educationalExperience}
                            onSubmit={this.addEducationalExperience}
                        />
                    </div>
                    <div className="flex-fill">
                        <PracticalExperienceSection
                            practicalExperience={this.state.practicalExperience}
                            onSubmit={this.addPracticalExperience}
                        />
                    </div>
                    <div className="flex-fill">
                        <SkillsSection skills={this.state.skills} onSubmit={this.addSkill} />
                    </div>
                </main>
            </div>
        );
    }
}
