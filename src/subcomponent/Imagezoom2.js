import React from "react";

import { Modal } from "reactstrap"

import "./Homeglobal.css";

import spiderMan2007 from "../img/spiderMan2007.jpg";
import spiderMangreat2007 from "../img/spiderMangreat2007.jpg";

class Imgzoom2 extends React.Component {
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

                    <img src={spiderMan2007} alt="tobey" />
                    <h4>Spiderman 2007</h4>

                </button>            
            
                <Modal isOpen={this.state.open}>

                    <button>
                    <img src={spiderMangreat2007} alt="tobey" />
                    </button>

                    <button onClick={this.openModal}>Close</button>
                </Modal>

            </>
        );

    }

}

export default Imgzoom2;