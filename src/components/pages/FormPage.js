import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LostItemForm from "../Forms/LostItemForm";
import '../Forms/LostItemForm.css';
import FoundItemForm from "../Forms/FoundItemForm";
function FormPage(){
    const navigate = useNavigate();

    return(
        <div>
            <p className="back-button" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> Back to homepage
            </p>
            <div className={"form"}>
                <FoundItemForm/>

            </div>

        </div>
    )
}

export default FormPage;