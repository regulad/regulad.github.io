import React from "react";
import "./SkillBox.css";

interface SkillBoxProps {
    icon?: string | null;
    title: string;
    link?: string | null;
    id: string;
    children: React.ReactNode | React.ReactNode[] | null;
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
                            : <></>
                    }
                    {
                        !!this.props.link
                            ? <a href={this.props.link}>
                                <h4 className={"Skill-title"}>{this.props.title}</h4>
                            </a>
                            : <h4 className={"Skill-title"}>{this.props.title}</h4>
                    }
                </div>
                <div className={"Skill-description"}>
                    {!!this.props.children ? this.props.children : <></>}
                </div>
            </div>
        );
    }
}

