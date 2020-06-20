import React from "react";

const Header = () => {
    return (
        <header>
            Netlify CMS with NEXT.JS
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #000;
                    color: #fff;
                    height: 15rem;
                    font-size: 3rem;
                }
            `}</style>
        </header>
    );
};

export default Header;
