import React from "react";
import SplashText from "../SplashText/SplashText";
import NavDropdown from "../NavDropdown/NavDropdown";
import "./Header.css";

interface HeaderProps {

}

interface HeaderState {
    shouldStick: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            shouldStick: true,
        }
    }

    render() {
        return (
            <header className={`Header ${this.state.shouldStick ? "Sticky" : ""}`}>
                <div className={"Header-inside"}>
                    <div className={"Header-content"}>
                        <div className={"Title-box"}>
                            <h1 className={"Title"}>Regulad's Mouse House</h1>
                            <SplashText></SplashText>
                        </div>
                        <NavDropdown></NavDropdown>
                    </div>
                    <hr className={"Break"}></hr>
                </div>
                <div className={`Header-outside ${!this.state.shouldStick ? "Sticky" : ""}`}>
                    {/* TODO: Fix this shooting up to the top of the screen when it is not scrolled */}
                    <div
                        className={"Fixed-right-inside Sticky-toggle"}
                        onClick={() => this.setState({shouldStick: !this.state.shouldStick})}
                    >
                        📌 {/* TODO: icon? */}
                    </div>
                </div>
            </header>
        )
    }
}
