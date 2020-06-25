import Layout from "../../components/layout";
import PostHead from "../../components/postHead";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export async function getStaticPaths() {
    const slugs = getAllPosts(["slug"]);

    const paths = slugs.map(slug => {
        return { params: { slug: slug.slug } };
    });
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = getPostBySlug(slug, [
        "title",
        "date",
        "published",
        "tags",
        "cover_image",
        "description",
        "body"
    ]);

    const content = await markdownToHtml(post.body || "");

    return { props: { post: { ...post, content } } };
}

function Post({ post }) {
    return (
        <Layout post={true}>
            <div className="post">
                <PostHead post={post} />
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
            <style jsx>{`
                .post {
                    background-color: #fff;
                    border-radius: 10px;
                }
                .content {
                    padding: 2rem;
                    border-top: 1px solid #000;
                }
            `}</style>
        </Layout>
    );
}
export default Post;
