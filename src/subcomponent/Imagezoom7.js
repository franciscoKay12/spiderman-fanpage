import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import spiderMantom3 from "../img/spiderMantom3.jpg";
import spiderMantomgreat3 from "../img/spiderMantomgreat3.jpg";

class Imgzoom7 extends React.Component {
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

                    <img src={spiderMantom3} alt="tom" />
                    <h4>Spiderman 2021</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={spiderMantomgreat3} alt="tom" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom7;