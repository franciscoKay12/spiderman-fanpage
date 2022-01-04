import React from "react";

import "./Imagecss.css";

import greenGoblin1 from "../imgenemy/greenGoblin1.jpg";
import greenGoblin2 from "../imgenemy/greenGoblin2.jpg";
import greenGoblin3 from "../imgenemy/greenGoblin3.jpg";

function Imagenemy1(){
    
        return (
            
            <>

                <button>
                    
                        
                            <img src={greenGoblin1} alt="willian" />
                             
                            <img src={greenGoblin2} alt="willian" />
                        
                            <img src={greenGoblin3} alt="willian" />
                       
                    
                </button>

            </>
        );

}

export default Imagenemy1;