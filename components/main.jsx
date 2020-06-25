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
                    padding: 2rem;
                    background-color: #f6f0ff;
                }
            `}</style>
        </main>
    );
};

export default Main;
