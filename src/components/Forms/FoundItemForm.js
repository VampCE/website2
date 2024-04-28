import React, { useState } from 'react';
import './LostItemForm.css';

function FoundItemForm() {
    const [itemName, setItemName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [NameSurname, setNameSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [security, setSecurity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Item Name:', itemName);
        console.log('Location:', location);
        console.log('Description:', description);
        console.log('Image:', image);
        console.log('Category:', category);
        console.log('Name,Surname', NameSurname);
        console.log('Phone Number', phoneNumber);
        console.log('Security:', security);
        setItemName('');
        setLocation('');
        setDescription('');
        setImage(null);
        setCategory('');
        setNameSurname('');
        setPhoneNumber('');
        setSecurity('');
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="input-container">
            <h1>Found Item Report Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category:</label>
                    <select
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Personal Belongings">Personal belongings</option>
                        <option value="Technological products">Technological Products</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Name Of Item:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Where is it found?:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Add Details:</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Please add an image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group">
                    <label>Name and surname of the person who found it:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={NameSurname}
                        onChange={(e) => setNameSurname(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number of the person who found it:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Security:</label>
                    <select
                        className="form-control"
                        value={security}
                        onChange={(e) => setSecurity(e.target.value)}
                        required
                    >
                        <option value="">Select Location</option>
                        <option value="A Block">A Block</option>
                        <option value="B Block">B Block</option>
                        <option value="C Block">C Block</option>
                        <option value="D Block">D Block</option>
                        <option value="E Block">E Block</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default FoundItemForm;