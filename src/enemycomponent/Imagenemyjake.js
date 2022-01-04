import React from "react";

import "./Imagecss.css";

import mysteryHe1 from "../imgenemy/mysteryHe1.jpg";
import mysteryHe2 from "../imgenemy/mysteryHe2.jpg";
import mysteryHe3 from "../imgenemy/mysteryHe3.jpg";

function Imagenemyjake(){
    
        return (
            
            <>

                <button>
                    
                        
                            <img src={mysteryHe1} alt="jake" />
                             
                            <img src={mysteryHe2} alt="jake" />
                        
                            <img src={mysteryHe3} alt="jake" />
                       
                    
                </button>

            </>
        );

}

export default Imagenemyjake;