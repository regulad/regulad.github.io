import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import SkillGrid from "./components/SkillGrid/SkillGrid";
import SkillBox from "./components/SkillBox/SkillBox";
import python from "./assets/languages/Python-logo-notext.svg";
import javascriptLogo from "./assets/languages/Unofficial_JavaScript_logo_2.svg";
import typescriptLogo from "./assets/languages/Typescript_logo_2020.svg";
import javaLogo from "./assets/languages/java-14.svg";
import githubLogo from "./assets/accounts/github-mark.svg";
import AccountBox from "./components/AccountBox/AccountBox";
import GitHubSkills from "./components/GitHubSkills/GitHubSkills";

function App() {
    return (
        <>
            <Header></Header>
            <div className="Main-body">
                <p>Hi there! I'm Parker, or as you probably know me, <code>regulad</code>.</p>
                <p>This website is a less of a resume and more of my collection of some of my projects.</p>
                <div className={"Section"}>
                    <SectionHeader title={"Projects"} id={"Projects"}></SectionHeader>
                    <p>My most favorite currently maintained projects, these are copied from my GitHub pinned repositories. </p>
                    <GitHubSkills username={"regulad"}></GitHubSkills>
                </div>
                <div className={"Section"}>
                    <SectionHeader title={"Languages"} id={"Languages"}></SectionHeader>
                    <SkillGrid>
                        <SkillBox icon={python} title={"Python"} id={"Python-skill"}>
                            <p>I learned Python 3 in 2020.</p>
                        </SkillBox>
                        <SkillBox icon={javaLogo} title={"Java"} id={"Java-skill"}>
                            <p>I learned Java 1.8 in 2020.</p>
                        </SkillBox>
                        <SkillBox icon={javascriptLogo} title={"JavaScript"} id={"JavaScript-skill"}>
                            <p>I learned JavaScript in 2022.</p>
                        </SkillBox>
                        <SkillBox icon={typescriptLogo} title={"TypeScript"} id={"TypeScript-skill"}>
                            <p>I learned TypeScript in 2022, at the same time I learned JavaScript.</p>
                        </SkillBox>
                    </SkillGrid>
                </div>
                <div className={"Section"}>
                    <SectionHeader title={"Accounts"} id={"Accounts"}></SectionHeader>
                    <SkillGrid>
                        <AccountBox name={"GitHub"} icon={githubLogo} link={"https://github.com/regulad"}></AccountBox>
                    </SkillGrid>
                </div>
                <div className={"Section"}></div>
                    <SectionHeader title={"Contact"} id={"Contact"}></SectionHeader>
                    <p>
                        Please contact me via my Discord account <code>regulad#7959</code> or my email <code>regulad (at) regulad (dot) xyz</code>.
                    </p>
                </div>
            <hr></hr>
            <Footer></Footer>
        </>
);
}

export default App;
