import React from "react";

import "./Imagecss.css";

import willianDafoe from "../imgenemy/willianDafoe.jpg";

function Imagenemy(){
    
        return (
            
            <>

                <button>

                    <img src={willianDafoe} alt="willian" />
                    <h4>Played the green goblin.</h4>

                </button>

            </>
        );

}

export default Imagenemy;