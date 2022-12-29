import React from "react";

interface SectionHeaderProps {
  title: string;
  id: string;
}

interface SectionHeaderState {

}

export default class SectionHeader extends React.Component<SectionHeaderProps, SectionHeaderState> {
  render() {
    const pathSep: string = window.navigator.userAgent.indexOf("Windows") !== -1 ? "\\" : "/";
    return (
      <div className={"Section-header"} id={this.props.id}>
        <h2 className={"Section-header-text"}>
          <span className={"Section-header-span"}>
            <a
              className={"Section-header-line"}
              href={"#" + this.props.id}
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
