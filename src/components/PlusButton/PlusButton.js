// PlusButton.js
import React from "react";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";

function PlusButton() {


    return (
        <>
            <div >
                <Link to="/LostForm" className="plus-button" >
                    <AddCircleOutlineIcon sx={{ fontSize: 90 }} />
                </Link>
            </div>

        </>
    );
}

export default PlusButton;