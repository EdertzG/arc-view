import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import FileList from './FileList'

function Viewer(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const my_list = ['aaa', 'b', 'cc'];
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                View the file {props.file_name}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contents of {props.file_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FileList my_list={my_list} url='http://stash.compciv.org/scrapespeare/matty.shakespeare.tar.gz

'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}
Viewer.propTypes = {
    file_name: PropTypes.string,
    my_list: PropTypes.string
};

export default Viewer


