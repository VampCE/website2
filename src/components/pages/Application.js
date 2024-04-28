import React, { useState } from "react";
import HomeNav from "../HomeNav";
import Sidebar from "../Siderbar/Sidebar.js";
import '../Post.css';
import Feed from "../Feed";
import PlusButton from  "../PlusButton/PlusButton.js";
import '../PlusButton/PlusButton.css';

function Application() {
    const [situation, setSituation] = useState('');

    const handleSituationChange = (newSituation) => {
        setSituation(newSituation);
    };

    return (
        <>
            <HomeNav />
            <Sidebar handleChange={handleSituationChange} />
            <Feed situation={situation} />
            <div className={"plus-button-container"}>
                <PlusButton/>
            </div>
        </>
    );
}

export default Application;