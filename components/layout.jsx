import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const Layout = ({ children, post }) => {
    return (
        <>
            <Header />
            <Main post={post}>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
