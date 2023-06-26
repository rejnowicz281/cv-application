import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./index.css";

{
    /* ✔ ❌ */
}
export default function EditableInput(props) {
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const disableEditingOnClick = (e) => {
            if (e.target.id !== props.id) {
                setEditing(false);
            }
        };

        const disableEditingOnEnter = (e) => {
            if (e.key === "Enter") {
                setEditing(false);
            }
        };

        document.addEventListener("click", disableEditingOnClick);
        document.addEventListener("keydown", disableEditingOnEnter);

        return () => {
            document.removeEventListener("click", disableEditingOnClick);
            document.removeEventListener("keydown", disableEditingOnEnter);
        };
    }, [props.id]);

    if (editing) {
        return (
            <input
                onChange={(e) => props.onChange(e.target.value)}
                type={props.type}
                className="EditableInput"
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
            />
        );
    } else {
        return (
            <div onClick={() => setEditing(true)} className="EditableInput" id={props.id}>
                {props.value == "" ? props.placeholder : props.value}
            </div>
        );
    }
}

EditableInput.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
