import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Detail from "../../detail";

function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Detail />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
                <Button onClick={props.onHide} variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default  MyModal