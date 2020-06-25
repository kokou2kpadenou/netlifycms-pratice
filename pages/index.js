import Layout from "../components/layout";
import PostCard from "../components/postCard";
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
        <Layout>
            <ul className="posts">
                {posts.map((post, id) => (
                    <PostCard key={id} post={post} />
                ))}
            </ul>
            <style jsx>{`
                //
                .posts {
                    list-style: none;
                    margin: 10px;
                }
            `}</style>
        </Layout>
    );
}

export default Allposts;
