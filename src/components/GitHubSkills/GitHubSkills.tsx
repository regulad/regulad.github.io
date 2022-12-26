import React from "react";
import SkillGrid from "../SkillGrid/SkillGrid";
import SkillBox from "../SkillBox/SkillBox";
import "./GitHubSkills.css";

interface GitHubSkillsProps {
    username: string;
}

type PinnedRepository = {
    owner: string;
    repo: string;
    link: string;
    description: string;
    image: string;
    website: string;
    language: string;
    languageColor: string;
    stars: string | number;
    forks: string | number;
}

interface GitHubSkillsState {
    data: Array<PinnedRepository> | null;
    isErrored: boolean;
}

export default class GitHubSkills extends React.Component<GitHubSkillsProps, GitHubSkillsState> {
    constructor(props: GitHubSkillsProps) {
        super(props);
        this.state = {
            data: null,
            isErrored: false,
        }
    }

    componentDidMount() {
        fetch(`https://gh-pinned-repos.egoist.dev/?username=${this.props.username}`)
            .then((response: Response) => {
                if (response.ok) {
                    response.json()
                        .then((repositories: Array<PinnedRepository>) => {
                            this.setState({data: repositories});
                        })
                        .catch((e) => {
                           this.setState({isErrored: true});
                           console.log(e);
                        });
                } else {
                    this.setState({isErrored: true});
                }
            })
            .catch((e) => {
                this.setState({isErrored: true});
                console.log(e);
            });

        // I don't like depending on this since I have no control if it's up or down but it's fine.
    }

    render() {
        if (!this.state.isErrored) {
            if (this.state.data != null) {
                const boxes: Array<JSX.Element> = this.state.data.map((repository) => {
                    return (
                        <SkillBox
                            key={repository.repo} // react wants this
                            title={repository.repo}
                            id={`GitHub-repo-${repository.repo}`}
                            link={repository.link}
                            >
                            <p className={"Repository-language"}>
                                This repository is written in
                                &thinsp;
                                <code style={
                                    {color: repository.languageColor}
                                }>
                                    {repository.language}
                                </code>
                            </p>
                            <p className={"Repository-description"}>
                                {
                                    repository.description
                                    || "This repository doesn't have a description. Give it a visit instead?"
                                }
                            </p>
                            <div className={"Repository-footer"}>
                                <span>
                                    <span className={"Repository-footer-title"}>
                                        Stars:
                                    </span>
                                    &nbsp;
                                    {repository.stars}
                                </span>
                                <span>
                                    <span className={"Repository-footer-title"}>
                                        Forks:
                                    </span>
                                    &nbsp;
                                    {repository.forks}
                                </span>
                            </div>
                        </SkillBox>
                    )
                });
                return (
                    <SkillGrid>
                        {boxes}
                    </SkillGrid>
                )
            } else {
                return <p>Loading...</p>
            }
        } else {
            return <p>An error occurred while trying to fetch pinned repositories!</p>
        }
    }
}
