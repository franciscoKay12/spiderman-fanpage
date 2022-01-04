import React from "react";

import "./Imagecss.css";

import drOctopus1 from "../imgenemy/dr.Octopus1.jpg";
import drOctopus2 from "../imgenemy/dr.Octopus2.jpg";
import drOctopus3 from "../imgenemy/dr.Octopus3.jpg";

function Imagenemyalfred(){
    
        return (
            
            <>

                <button>
                    
                        
                            <img src={drOctopus1} alt="alfred" />
                             
                            <img src={drOctopus2} alt="alfred" />
                        
                            <img src={drOctopus3} alt="alfred" />
                       
                    
                </button>

            </>
        );

}

export default Imagenemyalfred;