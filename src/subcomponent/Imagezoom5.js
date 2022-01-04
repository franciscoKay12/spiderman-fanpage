import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import spiderMantom1 from "../img/spiderMantom1.jpg";
import spiderMantomgreat1 from "../img/spiderMantomgreat1.jpg";

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

                    <img src={spiderMantom1} alt="tom" />
                    <h4>Spiderman 2017</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={spiderMantomgreat1} alt="andrew" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom4;