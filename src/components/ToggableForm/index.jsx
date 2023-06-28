import PropTypes from "prop-types";
import { useState } from "react";

export default function ToggableForm({ classList, children, onSubmit }) {
    const [adding, setAdding] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setAdding(false);
        onSubmit();
    }

    if (adding) {
        return (
            <form onSubmit={(e) => handleSubmit(e)} className={classList ? classList : ""}>
                {children}
                <div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                    <button type="button" onClick={() => setAdding(false)} className="btn btn-danger ms-2">
                        Cancel
                    </button>
                </div>
            </form>
        );
    } else {
        return (
            <button onClick={() => setAdding(true)} className="btn btn-primary">
                Add
            </button>
        );
    }
}

ToggableForm.propTypes = {
    classList: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
