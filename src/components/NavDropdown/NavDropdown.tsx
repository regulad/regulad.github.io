import React from "react";
import "./NavDropdown.css";

interface NavDropdownProps {

}

interface NavDropdownState {
    isOpen: boolean;
}

export default class NavDropdown extends React.Component<NavDropdownProps, NavDropdownState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        const arrow = this.state.isOpen ? "▼" : "▶"; // TODO: Replace with nicer icon (google?)

        return (
            <div className={"Nav-dropdown"} onPointerLeave={() => this.setState({isOpen: false})}>
                <div className={"Nav-arrow"} onPointerEnter={() => this.setState({isOpen: true})}>
                    {arrow}
                </div>
                <nav className={"Nav-dropdown-box"} hidden={!this.state.isOpen}>
                    /* TODO: Since this is nested, this should just be a short list of links on this page. */
                    <a href={"#"}>Link 1</a>
                    <a href={"#"}>Link 2</a>
                    <a href={"#"}>Link 3</a>
                </nav>
            </div>
        );
    }
}
