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

    console.log(posts);
    return { props: { posts } };
}

function Allposts({ posts }) {
    //
    return (
        <ul>
            {posts.map((post, id) => (
                <Link key={id} href="/posts/[slug]" as={`/posts/${post.slug}`}>
                    <a>
                        <li>
                            <h1>{post.title}</h1>
                        </li>
                    </a>
                </Link>
            ))}
        </ul>
    );
}

export default Allposts;
