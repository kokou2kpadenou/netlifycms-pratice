import React from "react";
import Head from "next/head";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const Layout = ({ children, post }) => {
    return (
        <>
            <Head>
                <title>Netlify CMS demo with nextjs</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Netlify CMS demo with nextjs."
                />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
            </Head>
            <Header />
            <Main post={post}>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
