import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import UserDetailsPopup from './UserDetailsPopup';
import ReactDOM from 'react-dom/client';
import '../../libs/d3v7.js'

function CardTemplate({ user }) {
  const [showModal, setShowModal] = useState(false);


  const handleOpen = () => {
    d3.selectAll("Users").classed("disable", true)
    d3.selectAll("popup").classed("disable", false)
    setShowModal(true)
  };

  const handleClose = () => {
    d3.selectAll("Users").classed("disable", false)
    setShowModal(false)
  };



  let { id, firstName, image } = user
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title><h4>{id}</h4></Card.Title>
          <Card.Text>
            <h2>{firstName}</h2>
          </Card.Text>
          <Button type="button" className="btn btn-success" variant="primary" onClick={handleOpen}>Show Details</Button>
        </Card.Body>
      </Card>
      {showModal && <UserDetailsPopup user={user} handleClose={handleClose} />}
    </div>

  );
}

export default CardTemplate;