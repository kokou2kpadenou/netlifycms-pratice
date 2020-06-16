import { useRouter } from "next/router";
import ErrorPage from "next/error";
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
    const router = useRouter();

    /*    if (!router.isFallback && !result) {
        return <ErrorPage statusCode={404} />;
    }*/

    console.log(post.tags.split(","));
    return (
        <div>
            {post.cover_image && (
                <img src={post.cover_image} alt="cover image" />
            )}
            <h1>{post.title}</h1>
            <div>
                <span>{post.published}</span>
                <span>{post.date}</span>
                <p>{post.description}</p>
                <ul>
                    {post.tags.split(",").map((tag, id) => (
                        <li key={id}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
export default Post;
