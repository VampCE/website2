import Category from "./Category/Category";
import Situation from "./Situation/Situation";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">


                <Category handleChange={handleChange} />
                <Situation handleChange={handleChange} />
                </div>

            </section>
        </>
    );
};

export default Sidebar;