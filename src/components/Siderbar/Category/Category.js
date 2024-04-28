import "./Category.css";
import Input from "../Input.js";

function Category({ handleChange }) {
    return (
        <div>
            <h2 className="sidebar-title">Categories</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value="personal belongings"
                    title="Personal Belongings"
                    name="test"
                />

                <Input
                    handleChange={handleChange}
                    value="technological products"
                    title="Technological Products"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Clothing"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="accessories"
                    title="Accessories"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="others"
                    title="Others"
                    name="test"
                />
            </div>
        </div>
    );
}

export default Category;