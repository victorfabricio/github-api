import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./provides/github-provider";


const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS/>
                <App />
            </GithubProvider>
        </main>
    );
}

export default Providers;