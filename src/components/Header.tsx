import React from "react";
import SplashText from "./SplashText";

interface HeaderProps {

}

interface HeaderState {
  shouldStick: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      shouldStick: false,
    }
  }

  render() {
    return (
      <header className={`Header ${this.state.shouldStick ? "Sticky" : ""}`}>
        <div className={"Header-inside"}>
          <div className={"Header-content"}>
            <span className={"Title-box"}>
              <h1 className={"Title"}>Regulad's Mouse House</h1>
              <SplashText></SplashText>
            </span>
          </div>
          <hr className={"Break"}></hr>
        </div>
        <div className={`Header-outside ${!this.state.shouldStick ? "Sticky" : ""}`}>
          <div
            className={"Fixed-right-inside Sticky-toggle"}
            onClick={() => this.setState({shouldStick: !this.state.shouldStick})}
          >
            📌
          </div>
        </div>
      </header>
    )
  }
}
