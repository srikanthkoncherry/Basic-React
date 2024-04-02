import React from 'react';




const UserDetailsPopup = ({ user, handleClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-content">
                    <h3>{user.firstName + " " + user.lastName}</h3>
                    <p>Age: {user.age}</p>
                    <p>Address: {JSON.stringify(user.address.address)}</p>
                    <p>Email: user.email</p>
                </div>
                <button className="close-btn" onClick={handleClose}>X</button>

            </div>
        </div>
    );
};


export default UserDetailsPopup;