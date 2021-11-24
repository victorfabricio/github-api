import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
    const { githubState, getUserRepos } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false)

    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos();
        }
        setHasUserForSearchrepos( !!githubState.repositories);
    }, [githubState.user]);
    return (
        <>
        {hasUserForSearchrepos ? (
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="Api-Catalago-Jgos"
                    linkToRepo="https://github.com/victorfabricio/Api-Catalago-Jgos"
                    fullname="victorfabricio/Api-Catalago-Jgos"
            />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                   name="aws-page"
                   linkToRepo="https://github.com/victorfabricio/aws-page"
                   fullname="victorfabricio/aws-page" 
                />
            </S.WrapperTabPanel>  
        </S.WrapperTabs>
        ) : (
        <></>
        )}
        </>
    );
};

export default Repositories;