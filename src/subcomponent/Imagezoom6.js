import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import spiderMantom2 from "../img/spiderMantom2.jpg";
import spiderMantomgreat2 from "../img/spiderMantomgreat2.jpg";

class Imgzoom6 extends React.Component {
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

                    <img src={spiderMantom2} alt="tom" />
                    <h4>Spiderman 2019</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={spiderMantomgreat2} alt="tom" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom6;