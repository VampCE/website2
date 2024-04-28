import React, { useState } from 'react';
import HttpsIcon from '@mui/icons-material/Https';

const Settings = () => {
    const initialFormData = {
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        address: '123 Main Street',
        country: 'USA',
        company: 'TechCo',
        phoneNumber: '123-456-7890',
        password: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [editMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
        console.log(formData); // Here you can perform any actions like API calls or validation
    };

    return (
        <div className="settings ">
            <h1 className="heading-center">Security Info</h1>
            <div className={"text-margin"}>
                <label>Name:</label>
                <input type="t" name="name" value={formData.name} onChange={handleChange} disabled={!editMode} />
            </div>
            <div className={"text-margin"}>
                <label>Surname:</label>
                <input type="t" name="surname" value={formData.surname} onChange={handleChange}
                       disabled={!editMode}/>
            </div>
            <div className={"text-margin"}>
                <label>Email:</label>
                <input type="e" name="email" value={formData.email} onChange={handleChange} disabled={!editMode}/>
            </div>
            <div className={"text-margin"}>
                <label>Address:</label>
                <input type="t" name="address" value={formData.address} onChange={handleChange}
                       disabled={!editMode}/>
            </div>
            <div className={"text-margin"}>
                <label>Country:</label>
                <input type="t" name="country" value={formData.country} onChange={handleChange}
                       disabled={!editMode}/>
            </div>
            <div className={"text-margin"}>
                <label>Company:</label>
                <input type="t" name="company" value={formData.company} onChange={handleChange}
                       disabled={!editMode}/>
            </div>
            <div className={"text-margin"}>
                <label>Phone Number:</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                       disabled={!editMode}/>
            </div>
            <div className={"text-margin"} style={{position: "relative" }}>
                <label style={{ display: "block" }}>Password:</label>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {editMode ? (
                        <input type="pass" name="password" value={formData.password} onChange={handleChange} />
                    ) : (
                        <input type="pass" name="password" value="********" disabled />
                    )}
                    <HttpsIcon style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%)" }} />
                </div>
            </div >

            {editMode ? (
                <button type="submit" onClick={handleSave}>Save</button>
            ) : (
                <button type="submit" onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
};

export default Settings;
