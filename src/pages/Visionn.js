import React, { useState, useEffect } from 'react';

const Visionn = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionStyle = {
        padding: isMobile ? '0px' : '40px',
        backgroundColor: '#f8f9fa',
        margin: '0 auto', // Ensure the section is centered
    };

    const containerStyle = {
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        padding: '0 15px',
    };

    const rowStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        gap: '20px',
    };

    const colStyle = {
        flex: '1',
        minWidth: isMobile ? '100%' : '300px',
        // padding: '15px',
        boxSizing: 'border-box',
        marginBottom: isMobile ? '20px' : '0', // Add margin bottom for mobile layout
    };

    const headingStyle = {
        textAlign: 'center',
        paddingBottom: '20px',
        fontSize: isMobile ? '24px' : '32px',
        color: '#343a40',
    };

    const visionContentStyle = {
        backgroundColor: '#FF7700',  // Light yellow background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: 'white',  // Dark text for contrast
    };

    const sectionTitleStyle = {
        color: '#2C9CD6',  // Yellow color for titles
    };
    const sectionTitleStylee ={
        color :'white'
    }

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <h3 style={{ ...headingStyle, ...sectionTitleStyle }}>About Our Vision & Mission</h3>
                <div style={rowStyle}>
                    <div style={colStyle}>
                        <div style={visionContentStyle}>
                            <h4 style={sectionTitleStylee}>Vision</h4>
                            <p>
                                At Amruta Travels, our vision is to become the leading provider of travel services,
                                committed to delivering outstanding experiences for our customers. We aim to transform
                                the travel experience by offering personalized, reliable, and comfortable journeys that
                                connect our travelers to their destinations. Through innovation, customer-focused services,
                                and an unwavering commitment to quality, we strive to make every journey with us a
                                memorable and enriching experience, promoting a deeper connection to the diverse and
                                vibrant cultures of our destinations.
                            </p>
                        </div>
                    </div>
                    <div style={colStyle}>
                        <div style={visionContentStyle}>
                            <h4 style={sectionTitleStylee}>Mission</h4>
                            <p>
                                Delivering exceptional customer service that goes beyond expectations at every interaction.
                                Embracing cutting-edge technology and innovation to enhance the travel experience and
                                streamline our services. Building strong partnerships with key stakeholders to broaden
                                our reach and offer a comprehensive range of services. Fostering a culture of continuous
                                improvement, learning, and development within our team to ensure we lead the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visionn;
