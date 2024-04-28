import React, { useState } from 'react';
import './HowToUse.css';

const HowToUse = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="how-to-use-container">
            <div className="how-to-use-tabs">
                <div
                    className={`tab ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabClick(0)}
                >
                    Create an Account
                </div>
                <div
                    className={`tab ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    Report Lost Item
                </div>
                <div
                    className={`tab ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    Find Lost Item
                </div>
                <div
                    className={`tab ${activeTab === 3 ? 'active' : ''}`}
                    onClick={() => handleTabClick(3)}
                >
                    Collaboration with Companies and Security
                </div>
                <div
                    className={`tab ${activeTab === 4 ? 'active' : ''}`}
                    onClick={() => handleTabClick(4)}
                >
                    Share Listing
                </div>
                <div
                    className={`tab ${activeTab === 5 ? 'active' : ''}`}
                    onClick={() => handleTabClick(5)}
                >
                    Customer Support and Assistance
                </div>
            </div>
            <div className="how-to-use-content">
                {activeTab === 0 && (
                    <div className="tab-content">
                        <p>Sign up for an account to report lost items or search for lost items. The signup process is quick and easy. Just fill in the required information and verify your account.</p>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="tab-content">
                        <p>If you've lost an item, create a report by providing details about the lost item. Include important information such as the type, color, and size of the item. This will help others identify it more easily.</p>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="tab-content">
                        <p>Search for lost items on the website. If you find a lost item, you can directly contact its owner.</p>
                    </div>
                )}
                {activeTab === 3 && (
                    <div className="tab-content">
                        <p>We collaborate with companies and security units to help find lost items. Companies and security units have access to the website and we coordinate with them to locate lost items.</p>
                    </div>
                )}
                {activeTab === 4 && (
                    <div className="tab-content">
                        <p>Once you've created a listing for your lost item, you can share it with other users. Other users can access the details of your listing and help find your lost item.</p>
                    </div>
                )}
                {activeTab === 5 && (
                    <div className="tab-content">
                        <p>Our dedicated customer support team is available to assist users throughout the lost item retrieval process. Whether it's providing guidance on using our platform, facilitating communication between owners and finders, or offering personalized assistance, we are committed to ensuring a seamless experience for our users.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HowToUse;


