import Link from "next/link";
const Main = ({ children, post = false }) => {
    return (
        <main>
            {post && (
                <div>
                    <Link href="/">
                        <a>Back Home</a>
                    </Link>
                </div>
            )}
            {children}
            <style jsx>{`
                main {
                    margin: 2rem;
                }
            `}</style>
        </main>
    );
};

export default Main;
