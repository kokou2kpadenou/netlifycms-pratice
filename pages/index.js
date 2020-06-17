import Link from "next/link";
import { getAllPosts } from "../lib/api";

export async function getStaticProps() {
    const posts = getAllPosts([
        "slug",
        "title",
        "date",
        "published",
        "tags",
        "cover_image",
        "description"
    ]);

    return { props: { posts } };
}

function Allposts({ posts }) {
    //
    return (
        <ul>
            {posts.map((post, id) => (
                <li key={id}>
                    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                        <a>
                            {post.cover_image && (
                                <div
                                    className="cover_img"
                                    style={{
                                        backgroundColor: "red",
                                        backgroundImage: `url("${post.cover_image}")`
                                    }}
                                ></div>
                            )}
                            <div className="details">
                                <h1>{post.title}</h1>
                                <div>{post.description}</div>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
            <style jsx>{`
                //
                ul {
                    list-style: none;
                }

                li {
                    max-width: 38rem;
                    margin: 2rem auto;
                    //border-radius: 10px;
                    border: 1px solid #000;
                }
                a {
                    text-decoration: none;
                    display: block;
                }
                a:link,
                a:visited {
                    color: #000;
                }
                .cover_img {
                    height: 160px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    //border-top-right-radius: 10px;
                    //border-top-left-radius: 10px;
                }
                .details {
                    padding: 2rem;
                }
            `}</style>
        </ul>
    );
}

export default Allposts;
