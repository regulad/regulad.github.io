import React from "react";
import "./SectionHeader.css"

interface SectionHeaderProps {
    title: string;
    id: string;
}

interface SectionHeaderState {

}

export default class SectionHeader extends React.Component<SectionHeaderProps, SectionHeaderState> {
    render() {
        const pathSep: string = window.navigator.userAgent.indexOf("Windows") != -1 ? "\\" : "/";
        return (
            <div className={"Section-header"} id={this.props.id}>
                <h2 className={"Section-header-text"}>
                    <span className={"Section-header-span"}>
                        <a
                            className={"Section-header-line"}
                            onClick={
                                () => {
                                    navigator.clipboard.writeText(`${window.location.href}#${this.props.id}`)
                                    .then(() => alert(`Copied ${window.location.href}#${this.props.id} to clipboard`))
                                }
                            }
                        >
                            .{pathSep}
                        </a>
                    </span>
                    {this.props.title}
                </h2>
            </div>
        );
    }
}
