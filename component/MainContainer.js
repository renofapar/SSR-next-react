import React, {Fragment} from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <meta name="keywords" content="next.js, react, react-dom" />
                <meta name="description" content="learn next.js" />
                <title>{title}</title>
                <meta charSet="utf-8" />
            </Head>
            <nav className="top-nav">
                <A href={`/`} text={`Home`}/>
                <A href={`/users`} text={`users`}/>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
