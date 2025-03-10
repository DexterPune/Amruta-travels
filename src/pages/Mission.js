import React from 'react';

const Mission = () => {
    const sectionStyle = {
        padding: '20px',
        backgroundColor: '#f8f9fa',
    };

    const containerStyle = {
        maxWidth: '1140px',
        margin: '0 auto',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    };

    const colStyle = {
        // padding: '15px',
        boxSizing: 'border-box',
        flex: '1',
        minWidth: '200px', 
    };

    const imgStyle = {
        width: '100%',
        height: 'auto',
    };

    
    const responsiveStyles = {
        '@media (max-width: 1200px)': {
            containerStyle: {
                maxWidth: '960px',
            },
        },
        '@media (max-width: 992px)': {
            colStyle: {
                flex: '1 0 50%',
                maxWidth: '50%',
            },
        },
        '@media (max-width: 768px)': {
            colStyle: {
                flex: '1 0 100%',
                maxWidth: '100%',
            },
        },
    };

    // Apply responsive styles
    const applyResponsiveStyles = (style, mediaQueries) => {
        const newStyle = { ...style };
        Object.keys(mediaQueries).forEach((mediaQuery) => {
            if (window.matchMedia(mediaQuery).matches) {
                Object.assign(newStyle, mediaQueries[mediaQuery]);
            }
        });
        return newStyle;
    };

    return (
        <section style={sectionStyle}>
            <div style={applyResponsiveStyles(containerStyle, responsiveStyles)}>
                <div >
                    <div style={applyResponsiveStyles(rowStyle, responsiveStyles)}>
                        <div style={applyResponsiveStyles(colStyle, responsiveStyles)}>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#343a40', padding: '15px 0', display: 'block' }}>
                                    <i className="fas fa-crown px-2" style={{ color: '#FF7700' }}></i>
                                    Exceptional Luxury Travel Experience
                                </strong>
                                <p style={{ paddingRight: '15px', textAlign: 'left' }}>
                                    World-class luxury travel services where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.
                                </p>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#343a40' }}>
                                    <i className="fas fa-tools px-2" style={{ color: '#FF7700' }}></i>
                                    Reliable Roadside Assistance
                                </strong>
                                <p style={{ paddingRight: '15px', textAlign: 'left' }}>
                                    Reliable support when you need it most, keeping you on the move with confidence and peace of mind.
                                </p>
                            </div>
                        </div>
                        <div style={applyResponsiveStyles({ ...colStyle, flex: '0 0 50%', maxWidth: '50%' }, responsiveStyles)}>
                            <img src="\img\Img for Booking\Img for Booking-01.png" loading="lazy" alt="Tempo Traveller" style={imgStyle} />
                        </div>
                        <div style={applyResponsiveStyles({ ...colStyle, flex: '0 0 25%', maxWidth: '25%' }, responsiveStyles)}>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#343a40', display: 'block' }}>
                                    <i className="fas fa-balance-scale px-2" style={{ color: '#FF7700' }}></i>
                                    Quality at Minimum Expense
                                </strong>
                                <p style={{ textAlign: 'left' }}>
                                    Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.
                                </p>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#343a40' }}>
                                    <i className="fas fa-exchange-alt px-2" style={{ color: '#FF7700' }}></i>
                                    Free Pick-Up & Drop-Off
                                </strong>
                                <p style={{  textAlign: 'left' }}>
                                    Enjoy free pickup and drop-off services, adding an extra layer of ease to your Bus Rental experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
