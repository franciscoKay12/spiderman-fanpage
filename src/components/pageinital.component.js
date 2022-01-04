import React from "react";

import "./css/BackGround.css"

import spidemanBottom from "../img/spidemanBottom.jpg";
import tobeyMaguire from "../img/tobeyMaguire.jpg";
import andrewGarfield from "../img/andrewGarfield.jpg";
import tomHolland from "../img/tomHolland.jpg";

import Imgzoom from "../subcomponent/Imagezoom";
import Imgzoom1 from "../subcomponent/Imagezoom1";
import Imgzoom2 from "../subcomponent/Imagezoom2";

import Imgzoom3 from "../subcomponent/Imagezoom3";
import Imgzoom4 from "../subcomponent/Imagezoom4";

import Imgzoom5 from "../subcomponent/Imagezoom5";
import Imgzoom6 from "../subcomponent/Imagezoom6";
import Imgzoom7 from "../subcomponent/Imagezoom7";

function InitialPage() {
    
        return (
            <div>
                <div className="background">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={spidemanBottom} alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={spidemanBottom} alt="Chicago" className="d-block" style={{ width: "100%" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={spidemanBottom} alt="New York" className="d-block" style={{ width: "100%" }} />
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
                        <div className="row">
                            <div className="col-sm-3">
                                <h2>All spidermans: </h2>
                                <h3>There are three spidermans</h3>

                                <div className="mt-4">
                                    <img src={tobeyMaguire} alt="img1" />
                                    <p>Tobey Maguire</p>
                                </div>

                                <div className="mt-4">
                                    <img src={andrewGarfield} alt="img1" />
                                    <p>Andrew Garfield</p>
                                </div>

                                <div className="mt-4">
                                    <img src={tomHolland} alt="img1" />
                                    <p>Tom Holland</p>
                                </div>


                                <h3 className="mt-5">If you want to learn about them, you can
                                    check it with their Biography</h3>
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm0001497/bio"}>Tobey biography</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm1940449/bio"}>Andrew biography</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href={"https://www.imdb.com/name/nm4043618/bio"}>Tom biography</a>
                                    </li>
                                </ul>
                                <hr className="d-sm-none" />
                            </div>

                            <div className="col-sm-8">

                                <h2>Movies</h2>
                                <p>Their movies are really good, their history are changing by each movie of them.</p>
                                <p>The character is from superhero of marvel, a random boy that is bitten by a spider,
                                    This radiact spider gives to Peter Parker powers of spider like strength, arachnid
                                    sense and climb walls. In the next information will pop up their films:</p>

                                <h3>Spiderman by Tobey Maguire</h3>

                                <div className="mt-3">
                                    <Imgzoom />
                                    <p className="mt-2">
                                        "Spider-Man" centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: "With great power comes great responsibility."
                                        <li>
                                            <strong>Rating:</strong>	PG-13 (Stylized Violence|Stylized Action)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Fantasy, Action
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong>	Sam Raimi
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Ian Bryce, Laura Ziskin
                                        </li>
                                        <li>
                                            <strong>Writer:</strong>	David Koepp, Stan Lee, Steve Ditko
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong>	May 3, 2002  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Nov 1, 2002
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong>	$403.7M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong>	1h 56m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong>	Columbia Pictures
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	Dolby SR, DTS, Dolby Stereo, SDDS, DTS-ES, Dolby A, Surround, Dolby Digital
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong>	Flat (1.85:1)
                                        </li>

                                    </p>
                                </div>

                                <div className="mt-5">
                                    <Imgzoom1 />
                                    <p className="mt-2">
                                        When a failed nuclear fusion experiment results in an explosion that kills his wife, Dr. Otto Octavius (Alfred Molina) is transformed into Dr. Octopus, a cyborg with deadly metal tentacles. Doc Ock blames Spider-Man (Tobey Maguire) for the accident and seeks revenge. Meanwhile, Spidey's alter ego, Peter Parker, faces fading powers and self-doubt. Complicating matters are his best friend's (James Franco) hatred for Spider-Man and his true love's (Kirsten Dunst) sudden engagement to another man.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Violence|Stylized Action)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Fantasy, Action, Adventure
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong>	Sam Raimi
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Avi Arad, Laura Ziskin
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> Michael Chabon, Alfred Gough, Miles Millar
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong>	Jun 30, 2004  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Nov 30, 2004
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $373.4M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 2m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Columbia Pictures, Sony Pictures Entertainment
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	Surround, DTS, Dolby Digital, SDDS
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong>	Scope (2.35:1)
                                        </li>

                                    </p>
                                </div>

                                <div className="mt-5">
                                    <Imgzoom2 />
                                    <p className="mt-2">
                                        Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Intense Action Violence)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Fantasy, Action, Adventure
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong>	Sam Raimi
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Avi Arad, Grant Curtis, Laura Ziskin
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> Ivan Raimi, Sam Raimi, Alvin Sargent
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong> May 4, 2007  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Oct 30, 2007
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $336.5M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 13m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Sony Pictures Entertainment
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	DTS, Dolby SRD, SDDS
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong>	Scope (2.35:1)
                                        </li>

                                    </p>
                                </div>


                                <div className="mt-5">
                                    <h3>Spiderman by Andrew Garfield</h3>
                                    <Imgzoom3 />
                                    <p className="mt-2">
                                        Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his father's, he pursues a quest to solve his parents' disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors' alter ego, the Lizard.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Sequences of Action & Violence)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Action, Adventure, Mystery & Thriller
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong> Marc Webb
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Laura Ziskin, Avi Arad, Matthew Tolmach
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> James Vanderbilt, Alvin Sargent, Steve Kloves
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong> Jul 3, 2012  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Nov 9, 2012
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $262.0M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 16m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Sony Pictures Entertainment
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	Dolby Digital, SDDS, DTS
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong>	Scope (2.35:1)
                                        </li>

                                    </p>
                                </div>

                                <div className="mt-5">

                                    <Imgzoom4 />
                                    <p className="mt-2">
                                        Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn (Dane DeHaan) returns, Peter comes to realize that all his enemies have one thing in common: Oscorp.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Seq. of Sci-Fi Action/Violence)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Action, Adventure
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong> Marc Webb
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Avi Arad, Matthew Tolmach
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> Alex Kurtzman, Roberto Orci, Jeff Pinkner
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong> May 2, 2014  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Aug 19, 2014
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $202.8M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 21m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Sony Pictures Entertainment
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>		Dolby Atmos, SDDS
                                        </li>

                                    </p>
                                </div>

                                <div className="mt-5">
                                    <h3>Spiderman by Tom Holland</h3>
                                    <Imgzoom5 />
                                    <p className="mt-2">
                                        Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Sci-Fi Action Violence|Brief Suggestive Comments|Some Language)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Fantasy, Action, Adventure, Comedy
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong> Jon Watts
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Amy Pascal, Kevin Feige
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> Jonathan M. Goldstein, John Francis Daley, Jon Watts, Christopher Ford, Chris McKenna, Erik Sommers
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong> Jul 7, 2017  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Oct 17, 2017
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $334.4M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 13m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Sony Pictures Entertainment
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	DTS, SDDS, Dolby Atmos
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong> Scope (2.35:1)
                                        </li>

                                    </p>
                                </div>

                                <div className="mt-5">
                                    <Imgzoom6 />
                                    <p className="mt-2">
                                        Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Sci-Fi Action Violence|Brief Suggestive Comments|Some Language)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Fantasy, Action, Adventure, Comedy
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong> Jon Watts
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Amy Pascal, Kevin Feige
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> Chris McKenna, Erik Sommers
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong> Jul 2, 2019  Wide
                                        </li>
                                        <li>
                                            <strong>Release Date (Streaming):</strong>	Aug 27, 2019
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $390.7M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 9m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Sony Pictures Entertainment, Columbia Pictures
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	Dolby Digital, Dolby Atmos
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong> Scope (2.35:1)
                                        </li>

                                    </p>
                                </div>

                                <div className="mt-5">
                                    <Imgzoom7 />
                                    <p className="mt-2">
                                        For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.
                                        <li>
                                            <strong>Rating:</strong> PG-13 (Sequences of Action/Violence|Brief Suggestive Comments|Some Language)
                                        </li>
                                        <li>
                                            <strong>Genre:</strong>	Fantasy, Action, Adventure, Comedy
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>	English
                                        </li>
                                        <li>
                                            <strong>Director:</strong> Jon Watts
                                        </li>
                                        <li>
                                            <strong>Producer:</strong>	Amy Pascal, Kevin Feige
                                        </li>
                                        <li>
                                            <strong>Writer:</strong> Chris McKenna, Erik Sommers
                                        </li>
                                        <li>
                                            <strong>Release Date (Theaters):</strong> Dec 17, 2021  Wide
                                        </li>
                                        <li>
                                            <strong>Box Office (Gross USA):</strong> $470.4M
                                        </li>
                                        <li>
                                            <strong>Runtime:</strong> 2h 28m
                                        </li>
                                        <li>
                                            <strong>Distributor:</strong> Columbia Pictures
                                        </li>
                                        <li>
                                            <strong>Sound Mix:</strong>	Dolby Digital, Dolby Atmos
                                        </li>
                                        <li>
                                            <strong>Aspect Ratio:</strong> Scope (2.35:1)
                                        </li>

                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="mt-5 p-4 bg-dark text-white text-center">
                        <p>Sony Pictures has rights to the character.</p>
                        <h1></h1>
                    </div>

                </div>
            </div >
        );
    
}

export default InitialPage;
