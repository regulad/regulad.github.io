import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import SkillGrid from "./components/SkillGrid/SkillGrid";
import SkillBox from "./components/SkillBox/SkillBox";
import python from "./assets/Python-logo-notext.svg";
import javascriptLogo from "./assets/Unofficial_JavaScript_logo_2.svg";
import javaLogo from "./assets/java-14.svg";

function App() {
    return (
        <>
            <Header></Header>
            <div className="Main-body">
                <p>Hi there! I'm Parker, or as you probably know me, <code>regulad</code>.</p>
                <p>This website is a less of a resume and more of my collection of some of my projects.</p>
                <div className={"Section"}>
                    <SectionHeader title={"Programming & Markup Languages"} id={"Languages"}></SectionHeader>
                    <SkillGrid>
                        <SkillBox icon={python} title={"Python"} id={"Python-skill"}>
                            <p>I know Python!</p>
                        </SkillBox>
                        <SkillBox icon={javaLogo} title={"Java"} id={"Java-skill"}>
                            <p>I know Java!</p>
                        </SkillBox>
                        <SkillBox icon={javascriptLogo} title={"JavaScript"} id={"JavaScript-skill"}>
                            <p>I know JavaScript!</p>
                        </SkillBox>
                    </SkillGrid>
                </div>

            </div>
            <hr></hr>
            <Footer></Footer>
        </>
);
}

export default App;
