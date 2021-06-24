import React from 'react';
import './AppHeader.css';
import {IconContext} from "react-icons";
import {BsBrightnessHigh} from "react-icons/bs";

const AppHeader = () => {
    return (
        <header className="AppHeader">
            <div className="Logo">TODO</div>
            <button>
                <IconContext.Provider value={{color: "#f8f8f8", size: "1.75em"}}>
                    <BsBrightnessHigh />
                </IconContext.Provider>
            </button>
        </header>
    )
};

export default AppHeader;
