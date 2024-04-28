import React, { useEffect } from 'react';
import './AboutUs.css'; // CSS dosyasını içe aktar

const AboutUs = () => {
    useEffect(() => {
        animateTeamMembers();
    }, []);

    const animateTeamMembers = () => {
        const teamMembers = document.querySelectorAll('.team-member');
        teamMembers.forEach((member, index) => {
            setTimeout(() => {
                member.style.opacity = 1;
                member.style.transform = 'translateY(0)';
            }, index * 500); // Her üye için gecikme ekleyin (ms cinsinden)
        });
    };

    return (
        <div className="about-container">
            <div className="team-section">
                <h2>About Us</h2>
                <div className="text-container">
                    <div className="paragraphs">
                        <p>
                            We, as a young and dynamic team, set out to help people find lost belongings. Four university
                            friends came together to develop an innovative solution to make it easier to locate lost items.
                        </p>
                        <p>
                            Our mission is to assist people in easily finding their lost valuables and providing support
                            during their lost experiences. To achieve this goal, we have established an effective lost item
                            retrieval ecosystem by collaborating with universities, businesses, and security units.
                        </p>
                        <p>
                            Currently, we are partnering with Kadir Has University to provide a platform for students and
                            staff to locate lost items. Additionally, we offer a space for users to post announcements about
                            their lost belongings, facilitating communication between owners and potential finders.
                        </p>
                        <p>
                            By combining technology and user experience, our team aims to make the process of finding lost
                            items faster and more efficient. We continuously improve our platform and value user feedback to
                            better address the needs of the community.
                        </p>
                        <p>
                            Join us on our journey to find your lost item or help locate a lost item. We are delighted to
                            assist you in finding your valuable belongings and reaching lost items.
                        </p>
                    </div>
                </div>
            </div>
            <div className="team-section">
                <h2>Our Team</h2>
                <div className="team-members">
                    <div className="team-member" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                        <img src="/images/nuveyba.jpeg" alt="Team Member 1"/>
                        <h3>Nuveyba Durmuş</h3>
                    </div>
                    <div className="team-member" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                        <img src="/images/emine.jpeg" alt="Team Member 2"/>
                        <h3>Eminenur Toprak</h3>
                    </div>
                    <div className="team-member" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                        <img src="/images/dilara.jpeg" alt="Team Member 3"/>
                        <h3>Dilara Uygur</h3>
                    </div>
                    <div className="team-member" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                        <img src="/images/ozan.jpeg" alt="Team Member 4"/>
                        <h3>Ozan Şahan</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;









