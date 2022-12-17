import SkillBox from "../SkillBox/SkillBox";
import React from "react";
import "./SkillGrid.css";

interface SkillGridProps {
    children: React.ReactElement<SkillBox>[] | React.ReactElement<SkillBox>;
}

interface SkillGridState {

}

export default class SkillGrid extends React.Component<SkillGridProps, SkillGridState> {
    render() {
        return (
            <div className={"Skill-grid"}>
                {this.props.children}
            </div>
        );
    }
}

