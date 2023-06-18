import React from 'react'

const SuccessPage = ({onClose}) => {
    return (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Form Submitted Successfully</h2>
            <p>Thank you for submitting the form!</p>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      );
    };
    

export default SuccessPage