import { useRouter } from 'next/router';
import Render from '../../resources/components/render';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import POST_QUERY from '../../resources/graphql/post/post';
import Link from 'next/link';

import '../../resources/assets/css/style.scss';

const Post = () => {
    const router = useRouter();
    if (!router.query.id) return null;

    const RouterLink = (props) => {
        console.log('prop', props)
        return (
            props.href.match(/^(https?:)?\/\//)
            ? <a href={props.href}>{props.children}</a>
            : <Link to={props.href}>{props.children}</Link>
        );
      }

     const imageSrc = uri => {

        console.log('fdsa', uri)
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
                    <div className="background w-display m-top-35">
                        <div className="segment w-content">
                            <article className="post">
                                <section className="post__header">
                                    {/* <h1 className="post__header__title">{post.title}</h1> */}
                                    <h1 className="post__header__title">Nếu đã từng sử dụng React context cho dự án của bạn, và gặp phải tình trạng các component con</h1>
                                    <div className="post__header__banner">
                                        <img className="picture--latest border-item" src={bannerUrl}></img>
                                    </div>
                                </section>
                                <section className="post__content">
                                    <div className="content-display">
                                        <div className="author">
                                            <div className="avatar"><img className="col-100p" src="https://res.cloudinary.com/restaff/image/upload/v1599368841/avatar/avatar_xas6er.jpg" /></div>
                                            <div className="name-date">
                                                <p className="name fw-bold">Quân Duy</p>
                                                <p className="datetime">
                                                    <Moment format="L">
                                                        {post.published_at}
                                                    </Moment>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="typography">
                                            <ReactMarkdown
                                                source={post.content}
                                                transformImageUri={imageSrc}
                                                escapeHtml={false}
                                            />
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </div>
                    // <div>
                    //     <div
                    //         id="banner"
                    //         className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                    //         data-src={bannerUrl}
                    //         data-srcset={bannerUrl}
                    //         data-uk-img>
                    //         <h1>{post.title}</h1>
                    //     </div>

                    //     <div className="uk-section">
                    //         <div className="uk-container uk-container-small">
                    //             <ReactMarkdown source={post.content} escapeHtml={false} />
                    //             <p>
                    //                 <Moment format="MMM Do YYYY">
                    //                     {post.published_at}
                    //                 </Moment>
                    //             </p>
                    //         </div>
                    //     </div>
                    // </div>
                );
            }}
        </Render>
    );
};

export default Post;
