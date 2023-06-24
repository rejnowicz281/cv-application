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
    }

    render() {
        return (
            <div className="Cv">
                <section className="general-info">
                    <EditableInput id="first-name" type="text" value="First Name" />
                    <EditableInput id="last-name" type="text" value="Last Name" />

                    <EditableInput id="email" type="email" value="Email" />
                    <EditableInput id="phone" type="tel" value="Phone" />
                </section>
                <section className="educational-experience">
                    <h1>Educational experience</h1>
                    <button className="btn btn-primary">Add</button>
                    {/* School name, title of study, date of study */}
                </section>
                <section className="practical-experience">
                    <h1>Practical experience</h1>
                    <button className="btn btn-primary">Add</button>
                    {/* Company name, position title, main tasks, date (from-to) of working */}
                </section>
            </div>
        );
    }
}
