import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({ show, onClose, message }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
