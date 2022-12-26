import SkillBox from "../SkillBox/SkillBox";
import React from "react";
import "./SkillGrid.css";
import AccountBox from "../AccountBox/AccountBox";

interface SkillGridProps {
    children: React.ReactElement<SkillBox | AccountBox>[] | React.ReactElement<SkillBox | AccountBox>;
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

