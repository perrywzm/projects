import React from 'react';

// Styling for the scroller component file is done in the JS file 
// as it is more functional than cosmetic design.

const Scrollable = ({ children }) => {
    return (
        <div style={{overflowY: 'auto', flex:"1", width: "100%"}}>
            {children}
        </div>
    );
}

export default Scrollable;