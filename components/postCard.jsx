const PostCard = ({ post }) => {
    return (
        <>
            {post.published && (
                <li className="post">
                    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                        <a>
                            {post.cover_image && (
                                <div
                                    className="cover_img"
                                    style={{
                                        backgroundImage: `url("${post.cover_image}")`
                                    }}
                                ></div>
                            )}
                            <div className="details">
                                <h1 className="title">{post.title}</h1>
                                <div className="desc">{post.description}</div>
                                <div className="posted">{post.date}</div>
                                <ul className="tags">
                                    {post.tags.split(",").map((tag, id) => (
                                        <li
                                            className="tag"
                                            key={id}
                                        >{`#${tag}`}</li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    </Link>
                </li>
            )}

            <style jsx>{`
                .post {
                    max-width: 38rem;
                    margin: 6rem auto;
                }

                .title {
                    line-height: 2;
                }

                a {
                    text-decoration: none;
                    display: block;
                    //border: 1px solid #000;
                    box-shadow: 0px 3px 11px 0px rgba(50, 50, 50, 0.65);
                    border: none;
                    border-radius: 10px;
                    transition: transform 0.4s;
                }

                a:link,
                a:visited {
                    color: #000;
                }

                a:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 6px 21px 0px rgba(50, 50, 50, 0.65);
                }

                .desc {
                    line-height: 1.6;
                }

                .tags {
                    list-style: none;
                }

                .tag {
                    display: inline-block;
                    margin-right: 10px;
                    padding: 5px 10px;
                    background-color: rgba(240, 240, 240, 0.8);
                    border-radius: 2px;
                }

                .cover_img {
                    height: 160px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    border: none;
                }
                .posted {
                    font-size: 0.9rem;
                    margin: 1rem 0;
                    font-weight: bold;
                }

                .details {
                    padding: 2rem;
                }
            `}</style>
        </>
    );
};

export default PostCard;
