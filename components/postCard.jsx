import Link from "next/link";
import PostHead from "./postHead";

const PostCard = ({ post }) => {
    return (
        <>
            {post.published && (
                <li className="post">
                    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                        <a>
                            <PostHead post={post} />
                        </a>
                    </Link>
                </li>
            )}

            <style jsx>{`
                .post {
                    max-width: 38rem;
                    margin: 6rem auto;
                }

                a {
                    text-decoration: none;
                    display: block;
                    //border: 1px solid #000;
                    box-shadow: 0px 3px 11px 0px rgba(50, 50, 50, 0.65);
                    border: none;
                    border-radius: 10px;
                    transition: transform 0.4s;
                    background-color: #fff;
                }

                a:link,
                a:visited {
                    color: #000;
                }

                a:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 6px 21px 0px rgba(50, 50, 50, 0.65);
                }
            `}</style>
        </>
    );
};

export default PostCard;
