import React from "react";
import "./AccountBox.css";


interface AccountBoxProps {
    name: string;
    icon: string;
    link: string;
}

interface AccountBoxState {

}

export default class AccountBox extends React.Component<AccountBoxProps, AccountBoxState> {
    render() {
        return (
            <a
                className={"Account-box"}
                href={this.props.link}
                >
                    <img
                        className={"Account-icon"}
                        src={this.props.icon}
                        alt={`icon of ${this.props.name}`}
                        >
                    </img>
            </a>
        );
    }
}
