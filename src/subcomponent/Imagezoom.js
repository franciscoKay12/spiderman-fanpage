import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import spiderMan2002 from "../img/spiderMan2002.jpg";
import spiderMangreat2002 from "../img/spiderMangreat2002.jpg";

class Imgzoom extends React.Component {
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

                    <img src={spiderMan2002} alt="tobey" />
                    <h4>Spiderman 2002</h4>

                </button>

                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={spiderMangreat2002} alt="tobey" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom;