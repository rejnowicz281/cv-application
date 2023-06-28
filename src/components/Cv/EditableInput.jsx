import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./index.css";

{
    /* ✔ ❌ */
}
export default function EditableInput({ value, type, id, onChange, placeholder }) {
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const disableEditingOnClick = (e) => {
            if (e.target.id !== id) {
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
    }, [id]);

    if (editing) {
        return (
            <input
                onChange={(e) => onChange(e.target.value)}
                type={type}
                className="EditableInput"
                id={id}
                value={value}
                placeholder={placeholder}
            />
        );
    } else {
        return (
            <div onClick={() => setEditing(true)} className="EditableInput" id={id}>
                {value == "" ? placeholder : value}
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
