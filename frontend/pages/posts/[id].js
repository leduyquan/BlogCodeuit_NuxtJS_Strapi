import { useRouter } from 'next/router';
import { FacebookProvider, Like , Comments, CommentsCount } from 'react-facebook';
import Render from '../../resources/components/render';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import POST_QUERY from '../../resources/graphql/post/post';
import Link from 'next/link';

import '../../resources/assets/css/style.scss';

const Post = () => {
    const router = useRouter();
    if (!router.query.id) return null;

     const imageSrc = uri => {
        return process.env.API_URL + uri;
    }

    return (
        <Render query={POST_QUERY} path={router.query.id}>
            {({ data: { posts } }) => {
                const post = posts[0];
                const bannerUrl =
                    process.env.NODE_ENV !== 'development'
                        ? post.banner.url
                        : process.env.API_URL + post.banner.url;
                return (
                    <div className="wrapper m-top-35">
                        <div className="post">
                            <aside className="post__interact">
                            </aside>
                            <article className="post__content">
                                <img className="banner" src={bannerUrl}></img>
                                <div className="frame">
                                    <div className="category">
                                        <a className="text">Javascript</a>
                                    </div>
                                    <h1 className="title">{post.title}</h1>
                                    <section className="author">
                                        <div className="avatar">
                                            <img className="col-100p" src="https://res.cloudinary.com/restaff/image/upload/v1599368841/avatar/avatar_xas6er.jpg" />
                                        </div>
                                        <span className="name">Quân Duy</span>
                                        <span className="daytime">
                                            <i className="fa fa-calendar"></i><Moment format="DD/MM/YYYY">{post.published_at}</Moment>
                                        </span>
                                    </section>
                                    <div className="separator"></div>
                                    <section className="typography">
                                        <ReactMarkdown
                                            source={post.content}
                                            transformImageUri={imageSrc}
                                            escapeHtml={false}
                                        />
                                    </section>
                                </div>
                                <div className="frame m-top-30">
                                    <FacebookProvider appId="1002148063583402">
                                        <Like href={router.pathname} colorScheme="dark" showFaces share />
                                        <CommentsCount href={router.pathname} />
                                        <Comments href={router.pathname} />
                                    </FacebookProvider>
                                </div>
                            </article>
                        </div>
                    </div>
                );
            }}
        </Render>
    );
};

export default Post;
