import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import theamazingSpiderMan2 from "../img/theamazingSpiderMan2.jpg";
import theamazingSpiderMangreat2 from "../img/theamazingSpiderMangreat2.jpg";

class Imgzoom4 extends React.Component {
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

                    <img src={theamazingSpiderMan2} alt="andrew" />
                    <h4>Spiderman 2014</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={theamazingSpiderMangreat2} alt="andrew" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom4;