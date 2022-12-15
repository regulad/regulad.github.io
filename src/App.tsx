import React from 'react';
import './App.css';
import NavDropdown from './components/NavDropdown/NavDropdown';
import SplashText from "./components/SplashText/SplashText";

function App() {
    return (
        <>
            <header className={"Main-header"}>
                <div className={"Horizontal-box"}>
                    <h1 className={"Title"}>Regulad's Mouse House</h1>
                    <SplashText></SplashText>
                </div>
                <NavDropdown></NavDropdown>
            </header>
            <div className="Main-body">
                <p className="Title">Regulad's Mouse House</p>
                <p className="Subtitle">Coming soon to a webzone near you!</p>
                <p>In the meantime, my website from 2021 can be found <a href={"https://regulad.xyz/web2021"} className={"link"}>here</a>.</p>
            </div>
        </>
);
}

export default App;
