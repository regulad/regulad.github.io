import splashes from "../assets/splashes.json";
import React, {ReactNode} from "react";

interface SplashTextProps {

}

interface SplashTextState {
  splash: string | null; // The current splash text
}

export default class SplashText extends React.Component<SplashTextProps, SplashTextState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      splash: SplashText.getSplash(),
    }
  }

  setNewSplash(): void {
    this.setState({splash: SplashText.getSplash()});
  }

  static getSplash(): string {
    return splashes[Math.floor(Math.random() * splashes.length)];
  }

  render(): ReactNode {
    return (
      <p className={"Splash-text"} onClick={() => this.setNewSplash()}>
        {this.state.splash}
      </p>
    );
  }
}
