import React from "react";

import "./css/BackgroundHome.css";

import spideyvillains from "../imgenemy/spideyvillains.jpg";

import Imagenemy from "../enemycomponent/Imagenemy";
import Imagenemy1 from "../enemycomponent/Imagenemy1";

import Imagenemy2 from "../enemycomponent/Imagenemy2";
import Imagenemyalfred from "../enemycomponent/Imagenemyalfred";

import Imagenemy3 from "../enemycomponent/Imagenemy3";
import Imagenemykeaton from "../enemycomponent/Imagenemykeaton";

import Imagenemy4 from "../enemycomponent/Imagenemy4";
import Imagenemyjake from "../enemycomponent/Imagenemyjake";

function Villans() {
    return (
        <div>
            <div className="backgrounvillans">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={spideyvillains} alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={spideyvillains} alt="Chicago" className="d-block" style={{ width: "100%" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={spideyvillains} alt="New York" className="d-block" style={{ width: "100%" }} />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>   

                <div className="container-fluid mt-4 text-center">
                    <h3>Willem Dafoe</h3>
                    <Imagenemy />
                    <p>Willem Dafoe is internationally respected for bringing versatility, boldness, and daring to some of the most iconic films of our time.</p>
                    <p> 
                         Check his Filmography and history:
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm0000353/?ref_=nv_sr_srsg_0"}>Willem Dafoe</a>
                            </li>


                        </ul>

                    </p>
                    <Imagenemy1 />
                </div>

                <div className="container-fluid mt-5 text-center">
                    <h3>Alfred Molina</h3>
                    <Imagenemy2 />
                    <p>His stage work includes two major Royal National Theatre productions.</p>
                    <p> 
                         Check his Filmography and history:
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm0000547/?ref_=nv_sr_srsg_0"}>Alfred Molina</a>
                            </li>


                        </ul>

                    </p>
                    <Imagenemyalfred />
                </div>

                <div className="container-fluid mt-5 text-center">
                    <h3>Michael keaton</h3>
                    <Imagenemy3 />
                    <p>Quirky, inventive and handsome American actor Michael Keaton first achieved major fame .</p>
                    <p> 
                         Check his Filmography and history:
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm0000474/?ref_=nv_sr_srsg_0"}>Michael Keaton</a>
                            </li>


                        </ul>

                    </p>
                    <Imagenemykeaton />
                </div>

                <div className="container-fluid mt-5 text-center">
                    <h3>Jake Gyllenhaal</h3>
                    <Imagenemy4 />
                    <p>Jake Gyllenhaal has famously donned a cowboy hat, combat gear, and even a bubble, but he's also missed out on a number of roles.</p>
                    <p> 
                         Check his Filmography and history:
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm0350453/?ref_=nv_sr_srsg_0"}>Jake Gyllenhaal</a>
                            </li>


                        </ul>

                    </p>
                    <Imagenemyjake />
                </div>

            </div>
        </div>
    );
}

export default Villans;