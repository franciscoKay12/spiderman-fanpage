import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import theamazingSpiderMan1 from "../img/theamazingSpiderMan1.jpg";
import theamazingSpiderMangreat1 from "../img/theamazingSpiderMangreat1.jpg";

class Imgzoom3 extends React.Component {
    state = {
        open: false,
    }

    openModal = () => {
        this.setState({ open: !this.state.open });
    }

    render() {

        return (
            
            <>

                <button onClick={this.openModal}>

                    <img src={theamazingSpiderMan1} alt="andrew" />
                    <h4>Spiderman 2012</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={theamazingSpiderMangreat1} alt="andrew" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom3;