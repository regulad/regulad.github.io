import React from "react";
// @ts-ignore
import Gravatar from "react-gravatar";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={"Footer"} id={"Main-footer"}>
        <Gravatar
          email={"regulad@regulad.xyz"}
          size={200}
          className={"Gravatar"}
          protocol="https://"
        >
        </Gravatar>
        <div className={"Footer-text-box"}>
          <p className={"Footer-text"}>
            Copyright &copy; {new Date().getFullYear()} Parker Wahle
          </p>
        </div>
      </footer>
    )
  }
}
