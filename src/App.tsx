import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import SkillGrid from "./components/SkillGrid";
import SkillBox from "./components/SkillBox";
import AccountBox from "./components/AccountBox";
import GitHubSkills from "./components/GitHubSkills";

import pythonLogo from "./assets/languages/Python-logo-notext.svg";
import javascriptLogo from "./assets/languages/Unofficial_JavaScript_logo_2.svg";
import typescriptLogo from "./assets/languages/Typescript_logo_2020.svg";
import javaLogo from "./assets/languages/java-14.svg";
import githubLogo from "./assets/accounts/github-mark.svg";
import linkedinLogo from "./assets/accounts/LI-In-Bug.png";

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="Main-body">
        <p>Hi there! I'm Parker, or as you probably know me, <code>regulad</code>.</p>
        <p>This website is a less of a resume and more of my collection of some of my projects.</p>
        <div className={"Section"}>
          <SectionHeader title={"Projects"} id={"Projects"} />
          <p>My most favorite currently maintained projects, these are copied from my GitHub pinned repositories. </p>
          <GitHubSkills username={"regulad"} />
        </div>
        <div className={"Section"}>
          <SectionHeader title={"Languages"} id={"Languages"} />
          <SkillGrid>
            <SkillBox icon={pythonLogo} title={"Python"} id={"Python-skill"}>
              <p>I learned Python 3 in 2020.</p>
            </SkillBox>
            <SkillBox icon={javaLogo} title={"Java"} id={"Java-skill"}>
              <p>I learned Java 1.8 in 2020.</p>
              <p>Completed tutorials:</p>
              <ul>
                <li><a href={"https://hyperskill.org/tracks/8"}>JetBrains Academy Java for Beginners</a></li>
              </ul>
            </SkillBox>
            <SkillBox icon={javascriptLogo} title={"JavaScript"} id={"JavaScript-skill"}>
              <p>I learned JavaScript in 2022.</p>
              <p>Completed tutorials:</p>
              <ul>
                <li><a href={"https://reactrouter.com/en/main/start/tutorial"}>React Router Tutorial</a></li>
                <li><a href={"https://firebase.google.com/codelabs/firebase-web#0"}>Firebase web codelab</a></li>
              </ul>
            </SkillBox>
            <SkillBox icon={typescriptLogo} title={"TypeScript"} id={"TypeScript-skill"}>
              <p>I learned TypeScript in 2022.</p>
            </SkillBox>
          </SkillGrid>
        </div>
        <div className={"Section"}>
          <SectionHeader title={"Accounts"} id={"Accounts"} />
          <SkillGrid>
            <AccountBox name={"GitHub"} icon={githubLogo} link={"https://github.com/regulad"} />
            <AccountBox name={"LinkedIn"} icon={linkedinLogo} link={"https://www.linkedin.com/in/parker-wahle-1a75051a2/"} />
          </SkillGrid>
        </div>
        <div className={"Section"}></div>
        <SectionHeader title={"Contact"} id={"Contact"}></SectionHeader>
        <p>
          Please contact me via my Discord account <code>regulad#7959</code> or my email <code>regulad (at) regulad (dot) xyz</code>.
        </p>
      </div>
      <hr />
      <Footer />
    </>
  );
}
