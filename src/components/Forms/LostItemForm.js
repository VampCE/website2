import React, { useState } from 'react';
import './LostItemForm.css';

function LostItemForm() {
    const [itemName, setItemName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [isNotYours, setIsNotYours] = useState(false);
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Item Name:', itemName);
        console.log('Location:', location);
        console.log('Description:', description);
        console.log('Image:', image);
        console.log('Category:', category);
        console.log('Name', Name);
        console.log('Surname', Surname);
        console.log('Phone Number', phoneNumber);
        setItemName('');
        setLocation('');
        setDescription('');
        setImage(null);
        setCategory('');
        setName('');
        setSurname('');
        setPhoneNumber('');
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="input-container">
            <h1 style={{ justifyContent: "left",color: "#6d5b53" }}>I've Lost My Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Category</label>
                    <select
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="" style={{color:"blue"}}>Select a category</option>
                        <option value="Personal Belongings">Personal belongings</option>
                        <option value="Technological products">Technological Products</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>What did you lose?</label>
                    <input
                        type="text"
                        className="form-control"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Where did you lose?</label>
                    <input
                        type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>You can add details</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>If you have, add an image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group">
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={isNotYours}
                            onChange={(e) => setIsNotYours(e.target.checked)}
                        />
                        <label style={{marginLeft:3, marginBottom:2}}>If item is not yours</label>
                    </div>
                </div>
                {isNotYours && (
                    <>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Surname:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={Surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default LostItemForm;
