import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import spiderMan2004 from "../img/spiderMan2004.jpg";
import spiderMangreat2004 from "../img/spiderMangreat2004.jpg";

class Imgzoom1 extends React.Component {
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

                    <img src={spiderMan2004} alt="tobey" />
                    <h4>Spiderman 2004</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={spiderMangreat2004} alt="tobey" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom1;