import React from "react"
import SearchBar from "../SearchBar/SearchBar"


const navigation = () => {
    const linkConsole = () => {
        console.log("Accueuil")
    }
    const GalerieConsole = () => {
      console.log("Galerie");
    };
    const dblClick = () => {
      console.log("Contact");
    };
    return(
        <nav>
            <div className="navGauche">
                <ul>
                    <li><a onClick={linkConsole}>Links</a></li>
                    <li><a onMouseOver={GalerieConsole}>Links</a></li>
                    <li><a onDoubleClick={dblClick}>Links</a></li>
                </ul>
            </div>
            <div className="navDroite">
                <SearchBar/>
            </div>
        </nav>
    )
}

export default navigation