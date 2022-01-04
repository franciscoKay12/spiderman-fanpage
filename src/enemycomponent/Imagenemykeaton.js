import React from "react";

import "./Imagecss.css";

import Vulture1 from "../imgenemy/Vulture1.jpg";
import Vulture2 from "../imgenemy/Vulture2.jpg";
import Vulture3 from "../imgenemy/Vulture3.jpg";

function Imagenemykeaton(){
    
        return (
            
            <>

                <button>
                    
                        
                            <img src={Vulture1} alt="keaton" />
                             
                            <img src={Vulture2} alt="keaton" />
                        
                            <img src={Vulture3} alt="keaton" />
                       
                    
                </button>

            </>
        );

}

export default Imagenemykeaton;