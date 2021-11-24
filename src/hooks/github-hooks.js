import { useContext } from "react";
import { GithubContext } from "../provides/github-provider";

const useGithub = () => {
    const { githubState, getUser, getUserRepos } = useContext(GithubContext);

    return { githubState, getUser, getUserRepos };
};

export default useGithub;