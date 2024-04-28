import "../Category/Category.css";
import Input from "../Input.js";

function Situation({ handleChange }) {
    const handleInputChange = (event) => {
        handleChange(event.target.value);
    };

    // ... rest of the code

    return (
        <div>
            <h2 className="sidebar-title">Situation</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleInputChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleInputChange}
                    value="FOUND"
                    title="Found"
                    name="test"
                />

                <Input
                    handleChange={handleInputChange}
                    value="LOST"
                    title="Lost"
                    name="test"
                />
                <Input
                    handleChange={handleInputChange}
                    value="DELIVERED"
                    title="Delivered"
                    name="test"
                />

            </div>
        </div>
    );
}

export default Situation;