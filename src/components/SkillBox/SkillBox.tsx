import React from "react";
import "./SkillBox.css";

interface SkillBoxProps {
    icon: string | undefined;
    title: string;
    id: string;
    children: React.ReactNode;
}

interface SkillBoxState {

}

export default class SkillBox extends React.Component<SkillBoxProps, SkillBoxState> {
    render() {
        return (
            <div className={"Skill-box"} id={this.props.id}>
                <div className={"Skill-titles"}>
                    {
                        !!this.props.icon
                            ? <img
                                className={"Skill-icon"}
                                src={this.props.icon}
                                alt={`icon of ${this.props.title}`}
                            ></img>
                            : <></>}
                    <h4 className={"Skill-title"}>{this.props.title}</h4>
                </div>
                <div className={"Skill-description"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

